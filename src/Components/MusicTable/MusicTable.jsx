// import Music from "../Music/Music";

//How can I pull the API data to the table?
        // Using useEffect with async
//useEffect(() => {getSongInfo(); })
//async function getSongInfo(){const response = await axios.get('')}
        // Importing list from Music Component
//let songsReversed = [...songs].reverse()
//return (
    //<ul>
    //{songsReversed.map(song => Music song={song} key= {song.id}/>)}
    //</ul>
//);

const MusicTable = (songs) => {
    // let songTitle = title.map((title) => {
    //     return `<p> ${song.title}</p>`;
    // })
    return ( 
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
        </thead>
        <tbody>
            {/* {songs.map((song) => {
                return ( */}
                    <tr>
                        <td>"song.title"</td>
                        <td>"song.album"</td>
                        <td>"song.artist"</td>
                        <td>"song.genre"</td>
                        <td>"song.release_date"</td>
                    </tr>
                
            {/* })} */}
        </tbody>
    </table> );
}
 
export default MusicTable;