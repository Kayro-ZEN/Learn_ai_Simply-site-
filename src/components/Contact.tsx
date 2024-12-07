import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une question ? Une suggestion ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">contact@ai-hub.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                <p className="text-gray-400">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
                <p className="text-gray-400">123 Avenue de l'Innovation<br />75001 Paris, France</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
            >
              <Send size={20} className="mr-2" />
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;