import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { putPlayback } from "@/lib/spotifyApi";

interface Props {
    album: Album
    access_token: string
}

const Album = ({album, access_token}:Props) => {
    const mutation = useMutation({
        mutationFn: putPlayback
    })
    
    const {uri} = album

    
    return (
        <button onClick={() => mutation.mutate({access_token, uri})}>
            <Image
                src={album.images[0].url}
                alt={`Album Cover of ${album.name}`}
                width={300}
                height={300}
                unoptimized
                className='grow aspect-square'
            />   
        </button>
    )
}

export default Album