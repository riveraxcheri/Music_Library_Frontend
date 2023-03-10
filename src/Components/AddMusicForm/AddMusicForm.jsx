import React, { useState } from "react";

const AddMusicForm = (props) => {
  const [songTitle, setSongTitle] = useState("");
  const [songAlbum, setSongAlbum] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songGenre, setSongGenre] = useState("");
  const [songReleaseDate, setSongReleaseDate] = useState("");
  // const [isLiked, setIsLiked] = useState(false);
  //cont likeToggle = () => {setIsLiked(!isLiked);};

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      title: songTitle,
      album: songAlbum,
      artist: songArtist,
      genre: songGenre,
      release_date: songReleaseDate,
      // isLiked: false,
    };
    console.log(formValues);
    props.addNewSongProp(formValues).then(response =>props.getAllSongs())
    ;
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={songTitle}
          onChange={(event) => setSongTitle(event.target.value)}
        />
        <label>Album:</label>
        <input
          type="text"
          value={songAlbum}
          onChange={(event) => setSongAlbum(event.target.value)}
        />
        <label>Artist:</label>
        <input
          type="text"
          value={songArtist}
          onChange={(event) => setSongArtist(event.target.value)}
        />
        <label>Genre:</label>
        <input
          type="text"
          value={songGenre}
          onChange={(event) => setSongGenre(event.target.value)}
        />
        <label>Release Date:</label>
        <input
          type="date"
          value={songReleaseDate}
          onChange={(event) => setSongReleaseDate(event.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};
export default AddMusicForm;
