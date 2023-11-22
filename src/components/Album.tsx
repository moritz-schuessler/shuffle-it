import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { putPlayback } from "@/lib/spotifyApi";

interface Props {
    album: Album
    access_token: string
}

const Album = ({album, access_token}:Props) => {
    const mutation = useMutation({
        mutationFn: ({access_token, uri}:{access_token:string, uri:string}) => {
            return putPlayback(access_token, uri)
        }
    })
    
    const {name, uri, artists, images} = album
    
    return (
        <button onClick={() => mutation.mutate({ access_token, uri})} className='flex flex-col grow gap-[1rem] p-[1rem] bg-[#0a0a0a]'>
            <div className='flex grow'>
                <Image
                    src={images[0].url}
                    alt={`Album Cover of ${name}`}
                    width={300}
                    height={300}
                    unoptimized
                    className='grow aspect-square'
                />   
            </div>
            <div className='flex flex-col gap-[.5rem]'>
                <a>
                    {name}
                </a>
                <div>
                    {artists.map((artist) => artist.name).join(', ')}
                </div>
            </div>
        </button>

        )
}

export default Album

/*
        <div className='flex flex-col grow gap-[.5rem] p-[1rem] bg-white bg-opacity-10'>
            <button onClick={() => mutation.mutate({access_token, uri})} className='flex grow'>
                <Image
                    src={images[0].url}
                    alt={`Album Cover of ${name}`}
                    width={300}
                    height={300}
                    unoptimized
                    className='grow aspect-square'
                />   
            </button>
            <div className='flex flex-col gap-[.25rem]'>
                <div>
                    {name}
                </div>
                <div>
                    {artists.map((artist) => artist.name).join(', ')}
                </div>
            </div>
        </div>

*/
