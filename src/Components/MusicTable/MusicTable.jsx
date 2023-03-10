

const MusicTable = (props) => {
    return ( <table>
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
            {entries.map((entry, idex) => {
                return (
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })}
        </tbody>
    </table> );
}
 
export default MusicTable;