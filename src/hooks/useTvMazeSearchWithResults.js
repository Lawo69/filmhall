import { useState } from 'react';
import { TVMAZE_API_BASE } from '../config/api';

export default function useTvMazeSearchWithResults() {
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`${TVMAZE_API_BASE}/search/shows?q=${query}`);
      const data = await response.json();
      setResults(data.map(item => item.show));
    } catch (err) {
      console.error('Error fetching shows:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (!prev.some(f => f.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter(movie => movie.id !== id));
  };

  return {
    results,
    favorites,
    loading,
    handleSearch,
    addToFavorites,
    removeFromFavorites
  };
}
