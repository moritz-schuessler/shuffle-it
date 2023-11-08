'use client'

import Album from "@/components/Album";
import { getAlbums } from "@/lib/spotifyApi";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const Albums = () => {
    const { data: session } = useSession()

    const { data, status} = useQuery({ queryKey: ['albums', session?.access_token], queryFn: getAlbums, enabled: !!session?.access_token})

    if (status !== 'success') {
        return 'Loading...'
    }

    const {items: albums} = data!

    return (
        <main>
            <h2>
                Albums
            </h2>
            <div className='flex flex-row flex-wrap justify-between gap-[2rem] h-full'>
                {
                    albums.map(({album}) => {
                        return <Album key={album.id} album={album} access_token={session?.access_token!}/>
                    })
                }
            </div>
        </main>
    )
}

export default Albums