import {SignInButton} from "@/components/auth/buttons";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getProviders} from "next-auth/react";
import {redirect} from "next/navigation";

const SignIn = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/')
    }

    const providers = await getProviders();

    return (
        <>
            {
                Object.values(providers!).map((provider) => {
                    return <SignInButton key={provider.id} provider={provider}/>
                })
            }
        </>
    )
}

export default SignIn