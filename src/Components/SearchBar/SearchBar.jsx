import { useState } from "react";


const SearchBar = ({filterSongs}) => {
    const [searchSongs, setSearchSongs] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        filterSongs(searchSongs)
        console.log ("Song Info")
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="search" name="q" placeholder="Search Music"/>
            <button onChange={(e) => setSearchSongs(e.target.value)}>Search</button>
        </form>
        
    );
}
 
export default SearchBar;