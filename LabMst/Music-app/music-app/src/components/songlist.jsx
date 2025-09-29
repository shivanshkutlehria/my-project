export default function SongList({ songs}) {
  return (
    <table border="1">
        <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
            </tr>
        </thead>
        <tbody>
            {songs.map((song, index) => (
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}