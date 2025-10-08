import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MovieCard from './components/MovieCard';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { currentMovies, upcomingMovies } from './data/movies';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      
      <section id="cartelera" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                Cartelera Actual
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre las películas más emocionantes que están en cartelera ahora mismo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                index={index}
                isUpcoming={false}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="estrenos" className="py-20 bg-gradient-to-br from-gray-800 via-red-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
                Próximos Estrenos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No te pierdas las películas más esperadas que llegarán pronto a nuestras pantallas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                index={index}
                isUpcoming={true}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos los Estrenos
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;