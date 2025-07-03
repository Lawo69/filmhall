import { useState, useEffect } from 'react';
import { TVMAZE_API_BASE } from '../config/api';

export default function useTvMazeSearch(query) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${TVMAZE_API_BASE}/search/shows?q=${query}`, { signal });
        const data = await res.json();
        setSuggestions(data.slice(0, 6).map(item => item.show));
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();

    return () => controller.abort();
  }, [query]);

  return { suggestions, loading };
}
