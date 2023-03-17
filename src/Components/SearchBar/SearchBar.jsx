import { useState } from "react";

const SearchBar = ({userInput, setUserInput}) => {
  

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchSongs(e.target.value);
  // };
  // if (searchSongs.length > 0) {
  //   songs.filter((song) => {
  //       console.log (song.data);
  //   //   return song.data.match(searchSongs);
  //   });
  // }

  return (
    <form>
      <input
        type="search"
        placeholder="Search Music"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
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
