import React, { useState, useEffect } from "react";
import axios from "axios";
import AddMusicForm from "./Components/AddMusicForm/AddMusicForm";
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  // currently in the AppMusicForm:
  // const [songTitle, setSongTitle] = useState("");
  // const [songAlbum, setSongAlbum] = useState("");
  // const [songArtist, setSongArtist] = useState("");
  // const [songGenre, setSongGenre] = useState("");
  // const [songReleaseDate, setSongReleaseDate] = useState("");
  const [userInput, setUserInput] = useState([""]);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
    console.log("Hello World");
  }, []);

  //GET
  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  //FILTER (Not Finished)
  // async function filterSongs(searchInfo){
  //   const response = await axios.get('http://127.0.0.1:8000/api/music/', searchInfo);
  //   console.log(response.data);
  //   setSongs(response.data);
  // }

  //POST
  async function addNewSong(newSong) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 204) {
      console.log("Successfully created a new song!");
      getAllSongs();
    }
  }

  //Instantiation of Components
  return (
    <div>
      <NavBar />
      <AddMusicForm
        songs={songs}
        addNewSongProp={addNewSong}
        getAllSongs={getAllSongs}
      />
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <MusicTable songs={songs} userInput={userInput} />
      <button onClick={() => getAllSongs()}>Get All</button>
    </div>
  );
}

export default App;
