import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const Music = ({song}) => {
    return ( 
        <li className="info_list">
            <p> Title: {song.title} </p>
            <p> Album: {song.album} </p>
            <p> Artist: {song.artist} </p>
            <p> Genre: {song.genre} </p>
            <p> Release Date: {song.release_date} </p>
            {/* <button onClick={!song.isLiked}>Like</button> */}
            <EditButton/>
            <DeleteButton/>
        </li>
     );
}
 
export default Music;