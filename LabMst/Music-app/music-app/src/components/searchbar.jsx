export default function SearchBar({onSearch}) {
    return(
        <input 
        type="text" 
        placeholder="Search for songs or artists..." 
        onChange={(e) => onSearch(e.target.value)} 
        className="search-bar"
        />
    );
}