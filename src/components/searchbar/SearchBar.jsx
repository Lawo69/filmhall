// src/components/searchbar/SearchBar.jsx
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import useTvMazeSearch from '../../hooks/useTvMazeSearch';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { suggestions, loading } = useTvMazeSearch(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
      setQuery('');
    }
  };

  const handleSelectSuggestion = (title) => {
    setQuery(title);
    onSearch(title);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
          placeholder="Search title and add to grid"
          className="w-full pl-10 pr-4 py-2 rounded-sm text-white placeholder-gray-600 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-black border border-gray-700 rounded-md mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white"
              onClick={() => handleSelectSuggestion(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}

      {loading && (
        <div className="absolute mt-1 text-sm text-gray-400 px-2">
          Loading...
        </div>
      )}
    </div>
  );
}

export default SearchBar;