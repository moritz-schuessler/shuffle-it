import Image from "next/image";

interface Children {
    album: Album
}

const Album = ({album}:Children) => {
    return (
        <Image
            src={album.images[0].url}
            alt={`Album Cover of ${album.name}`}
            width={300}
            height={300}
            unoptimized
            className='grow aspect-square'
        />           
    )
}

export default Album