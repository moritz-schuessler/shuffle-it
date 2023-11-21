import {QueryKey} from "@tanstack/query-core";

const getAlbums = async ({ queryKey, pageParam  }:{queryKey:QueryKey, pageParam: string}) => {
    const [_key, access_token ] = queryKey

    const data = await fetch(pageParam, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    })
    return await data.json() as Albums
}

const putPlayback = ({access_token, uri}:{access_token:string, uri:string}) => {
    return fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify({
            context_uri: uri
        })
    })
}

export { getAlbums, putPlayback }

