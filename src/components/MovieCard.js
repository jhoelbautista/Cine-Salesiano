import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Star, ShoppingCart } from 'lucide-react';

const MovieCard = ({ movie, isUpcoming = false, index = 0 }) => {
  const handleViewDetails = () => {
    alert(`Ver detalles de: ${movie.title}`);
  };

  const handleBuyTickets = () => {
    alert(`Comprar entradas para: ${movie.title}`);
  };

  return (
    <motion.div
      className="bg-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl group hover:shadow-red-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div
          className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {movie.rating || movie.genre}
        </motion.div>

        {!isUpcoming && (
          <motion.button
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleViewDetails}
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-full p-4">
              <Play className="w-8 h-8 text-white" />
            </div>
          </motion.button>
        )}
      </div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {movie.title}
        </motion.h3>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{movie.genre}</span>
          </div>
          {movie.duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{movie.duration}</span>
            </div>
          )}
        </div>

        {isUpcoming && movie.releaseDate && (
          <motion.div 
            className="bg-blue-600/20 text-blue-400 px-3 py-2 rounded-lg text-sm font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            Estreno: {movie.releaseDate}
          </motion.div>
        )}

        {movie.synopsis && (
          <p className="text-gray-400 text-sm mb-6 line-clamp-3">
            {movie.synopsis}
          </p>
        )}

        <div className="flex gap-3">
          <motion.button
            onClick={handleViewDetails}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
            Ver detalles
          </motion.button>
          
          {!isUpcoming && (
            <motion.button
              onClick={handleBuyTickets}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-4 h-4" />
              Comprar
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;