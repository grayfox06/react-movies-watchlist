import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');

        const sanitizedQuery = query.trim().replace(/[^a-zA-Z0-9 ]/g, '');

        const res = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(
            sanitizedQuery
          )}&apikey=${API_KEY}`,
          { signal: controller.signal }
        );

        // Handle network failure
        if (!res.ok)
          throw new Error('Something went wrong with fetching movies!');

        // Handle API Key failure
        if (res.status === 401) throw new Error('Invalid API key!');

        // Handle invalid movie string
        const data = await res.json();
        if (data.Response === 'False') throw new Error('No movies found!');

        setMovies(data.Search);
        setError('');
      } catch (err) {
        console.error(err.message);

        if (err.name === 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
