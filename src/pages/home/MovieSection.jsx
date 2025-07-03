import React from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import MovieCard from '../../components/cards/MovieCard';
import useTvMazeSearchWithResults from '../../hooks/useTvMazeSearchWithResults';

const MovieSection = () => {
  const {
    results,
    favorites,
    loading,
    handleSearch,
    addToFavorites,
    removeFromFavorites
  } = useTvMazeSearchWithResults();

  return (
    <div className='bg-black-secondary'>
      <div className='container mx-auto flex flex-col gap-4 py-14 px-6 md:px-8 lg:px-10'>
        <div
          className='flex flex-col lg:flex-row gap-5 lg:items-center justify-between border-b pb-4'
        >
          <h1
            className='font-dinAlternate text-3xl font-medium'
            data-aos="fade-right"
          >
            Collect your favourites
          </h1>
          <div data-aos="fade-left">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {favorites.map((movie, index) => (
            <div data-aos="zoom-in" data-aos-delay={index * 100} key={movie.id}>
              <MovieCard
                movie={movie}
                onRemove={() => removeFromFavorites(movie.id)}
                isRemovable
              />
            </div>
          ))}
        </div>

        {results.length > 0 && (
          <>
            <h2 className="text-xl text-white mt-8" data-aos="fade-up">
              Search Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((movie, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100} key={movie.id}>
                  <MovieCard
                    movie={movie}
                    onAdd={() => addToFavorites(movie)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {loading && <p className="text-gray-400 mt-4">Loading results...</p>}
      </div>
    </div>
  );
};

export default MovieSection;
