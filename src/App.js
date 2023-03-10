import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
    console.log('Hello WOrld');
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }
  return (
    <div>
      <NavBar />
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;
