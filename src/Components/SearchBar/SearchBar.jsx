import { useState } from "react";

const SearchBar = ({songs}) => {
  const [searchSongs, setSearchSongs] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchSongs(e.target.value);
  };
  if (searchSongs.length > 0) {
    songs.filter((song) => {
        console.log (song.data);
    //   return song.data.match(searchSongs);
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search Music"
        value={searchSongs}
      />
      <button onChange={handleChange}>Search</button>
    </form>
  );
}; 
      /* <table>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
        {songs.map((song) => {
          <div>
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
            </tr>
          </div>;
        })}
      </table> */

export default SearchBar;
