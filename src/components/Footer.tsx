import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">AI Hub</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Explorez le futur de l'intelligence artificielle avec nous.
              Restez informé des dernières avancées et rejoignez notre communauté passionnée.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/innovations" className="hover:text-white">Innovations</Link></li>
              <li><Link to="/forum" className="hover:text-white">Forum</Link></li>
              <li><Link to="/resources" className="hover:text-white">Ressources</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="hover:text-white">Documentation</Link></li>
              <li><Link to="/resources" className="hover:text-white">Tutoriels</Link></li>
              <li><Link to="/resources" className="hover:text-white">Articles</Link></li>
              <li><Link to="/resources" className="hover:text-white">Téléchargements</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 AI Hub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;