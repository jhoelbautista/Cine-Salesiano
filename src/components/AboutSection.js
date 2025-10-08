import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Tradición Familiar",
      description: "Más de 15 años brindando entretenimiento de calidad para toda la familia en un ambiente seguro y acogedor."
    },
    {
      icon: Star,
      title: "Experiencia Premium",
      description: "Salas equipadas con la más moderna tecnología 4K, sonido envolvente y asientos de lujo para tu máxima comodidad."
    },
    {
      icon: Users,
      title: "Comunidad Salesiana",
      description: "Comprometidos con los valores salesianos de educación, alegría y cercanía con nuestros visitantes."
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Espacios seguros y familiares donde puedes disfrutar del mejor cine con total tranquilidad."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
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
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos más que un cine, somos una familia que comparte la pasión por el séptimo arte y los valores que nos unen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://ius-sdb.com/wp-content/uploads/2020/06/Sede-La-Paz-WEB.jpg"
                alt="Interior del Cine Salesiano"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Una Historia de Pasión por el Cine
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Fundado en 2008 bajo los principios salesianos de educación y alegría, 
                Cine Salesiano nació con la misión de ofrecer entretenimiento de calidad 
                para toda la familia.
              </p>
              <p className="text-lg leading-relaxed">
                A lo largo de los años, hemos sido testigos de innumerables sonrisas, 
                emociones compartidas y momentos mágicos que solo el cine puede crear.
              </p>
              <p className="text-lg leading-relaxed">
                Hoy, con 6 salas modernas y tecnología de vanguardia, seguimos 
                comprometidos con brindar la mejor experiencia cinematográfica en 
                un ambiente familiar y seguro.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-2xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para vivir la experiencia?
            </h3>
            <p className="text-gray-300 mb-6">
              Te invitamos a ser parte de nuestra familia y disfrutar del mejor cine en un ambiente único.
            </p>
            <motion.button
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#cartelera').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Cartelera Actual
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;