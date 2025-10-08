import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Bell, MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}, tu mensaje ha sido enviado. Te contactaremos pronto.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Salesiano 123, Centro, Ciudad",
      subContent: "Fácil acceso en transporte público"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      subContent: "Atención al cliente 24/7"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Dom: 14:00 - 23:00",
      subContent: "Funciones continuas"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-red-900">
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
              Contacto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte y ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-300 font-medium">{info.content}</p>
                    <p className="text-gray-400 text-sm mt-1">{info.subContent}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-2xl p-6 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">¡Síguenos!</h3>
              <p className="text-gray-300 text-sm mb-4">
                Mantente al día con nuestros estrenos y promociones especiales.
              </p>
              <div className="flex gap-3">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-sm font-medium">Facebook</span>
                </motion.button>
                <motion.button
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-sm font-medium">Instagram</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Nombre completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Asunto
                  </label>
                  <div className="relative">
                    <Bell className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 resize-none"
                    placeholder="Escríbenos tu mensaje aquí..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;