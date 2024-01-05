export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img
        src={
          movie.poster !== 'N/A'
            ? movie.poster
            : 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg'
        }
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className='btn-delete'
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
