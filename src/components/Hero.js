import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1489599735188-000eaf48e38c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Cine Salesiano
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ¡Tu mejor experiencia de cine te espera!
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Vive la magia del séptimo arte con la mejor tecnología audiovisual y comodidad incomparable
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#cartelera').scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5" />
              Ver Cartelera
            </motion.button>
            
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#proximos').scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="w-5 h-5" />
              Próximos Estrenos
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-8 mt-12 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span>Abierto todos los días</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-400" />
              <span>Calidad Premium</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;