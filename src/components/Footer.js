import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Cine Salesiano",
      content: [
        "Tu mejor experiencia de cine",
        "Calidad, tradición y familia",
        "desde 2008"
      ]
    },
    {
      title: "Información",
      links: [
        "Cartelera",
        "Próximos Estrenos", 
        "Promociones",
        "Reservas Grupales"
      ]
    },
    {
      title: "Contacto",
      info: [
        { icon: MapPin, text: "Av. Salesiano 123, Centro" },
        { icon: Phone, text: "+1 (555) 123-4567" },
        { icon: Mail, text: "info@cinesalesiano.com" },
        { icon: Clock, text: "Lun - Dom: 14:00 - 23:00" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                Cine Salesiano
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Más de 15 años brindando la mejor experiencia cinematográfica para toda la familia en un ambiente acogedor y seguro.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm font-medium">Facebook</span>
              </motion.button>
              <motion.button
                className="bg-red-600 hover:bg-red-700 p-3 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm font-medium">Instagram</span>
              </motion.button>
              <motion.button
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-xl transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm font-medium">YouTube</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-red-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Cartelera', 'Próximos Estrenos', 'Nosotros', 'Contacto', 'Promociones'].map((link, index) => (
                <motion.li key={link}>
                  <motion.button
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Servicios</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Salas Premium 4K</li>
              <li>Sonido Envolvente</li>
              <li>Snack Bar Gourmet</li>
              <li>Reservas Online</li>
              <li>Eventos Privados</li>
              <li>Funciones Especiales</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-red-400">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Salesiano 123</p>
                  <p className="text-gray-400 text-sm">Centro, Ciudad</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Atención 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-300">info@cinesalesiano.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Lun - Dom</p>
                  <p className="text-gray-400 text-sm">14:00 - 23:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cine Salesiano. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para la comunidad</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <motion.button 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacidad
              </motion.button>
              <motion.button 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Términos
              </motion.button>
              <motion.button 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Cookies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;