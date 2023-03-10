const Music = ({song}) => {
    return ( 
        <li>
            <p>{song.title}</p>
            <p>{song.album}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.release_date}</p>
            {/* <button onClick={!song.isLiked}>Like</button> */}
        </li>
     );
}
 
export default Music;