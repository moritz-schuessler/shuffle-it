import {QueryKey} from "@tanstack/query-core";

const getAlbums = async ({ queryKey }:{queryKey:QueryKey}) => {
    const [_key, access_token ] = queryKey
    
        const data = await fetch('https://api.spotify.com/v1/me/albums?offset=0&limit=20&locale=*', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        })
    return await data.json() as Albums
}

export { getAlbums }

