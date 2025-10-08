import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1489599162314-2b4355c90bb3?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-blue-900/80"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              Cine Salesiano
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ¡Tu mejor experiencia de cine te espera!
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Vive la magia del séptimo arte en nuestras modernas salas con la mejor tecnología y el ambiente más acogedor de la ciudad.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#cartelera').scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6" />
            Ver Cartelera
          </motion.button>
          
          <motion.button
            className="border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#estrenos').scrollIntoView({ behavior: 'smooth' })}
          >
            <Star className="w-6 h-6" />
            Próximos Estrenos
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-red-400 mb-2">6</h3>
            <p className="text-gray-300">Salas Modernas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">4K</h3>
            <p className="text-gray-300">Tecnología Digital</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-red-400 mb-2">15+</h3>
            <p className="text-gray-300">Años de Experiencia</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;