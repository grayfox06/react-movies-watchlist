export default function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg'
        }
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
