import { useState } from "react";
import SearchBar from "./components/searchbar";
import "./App.css";
import SongList from "./components/songlist";

export default function App() {
  const songs = [
    { title: "Song A", artist: "Artist 1", album: "Album X" },
    { title: "Song B", artist: "Artist 2", album: "Album Y" },
    { title: "Song C", artist: "Artist 1", album: "Album Z" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter( song=>
  (song.title + song.artist + song.album).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <h1>Music App</h1>
    <SearchBar onSearch={setSearchTerm}/>
    <SongList songs={filteredSongs}/>
    </>
  )
}