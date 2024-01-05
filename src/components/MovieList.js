import Movie from './Movie';

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className='list list-movies'>
      {movies.length > 0 ? (
        movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))
      ) : (
        <p
          style={{
            fontSize: '20px',
            fontWeight: '700',
            width: '200px',
            margin: '50% auto',
          }}
        >
          Search for a movie...
        </p>
      )}
    </ul>
  );
}
