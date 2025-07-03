import { X, Plus } from 'lucide-react';
import React from 'react';

const MovieCard = ({ movie, onAdd, onRemove, isRemovable }) => {
  const imageUrl = movie.image?.medium || '/assets/image/movie1.png';

  return (
    <div className="rounded-md overflow-hidden bg-gray text-white shadow-lg relative">
      {isRemovable ? (
        <button onClick={onRemove} className="absolute top-4 right-4 bg-black/50 p-2 hover:bg-black/70 cursor-pointer">
          <X className="w-5 h-5 text-white" />
        </button>
      ) : (
        <button onClick={onAdd} className="absolute top-4 right-4 bg-black/50 p-2 hover:bg-black/70 cursor-pointer">
          <Plus className="w-5 h-5 text-white" />
        </button>
      )}

      <img
        src={imageUrl}
        alt={movie.name}
        className="w-full h-[512px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl mb-1 font-dinAlternate">{movie.name}</h2>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
          {movie.summary ? movie.summary.replace(/<[^>]*>/g, '').slice(0, 100) + '...' : 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
