import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Lightbulb, MessageSquare, Mail, Home, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: 'Accueil', icon: <Home size={20} />, to: '/' },
    { name: 'À propos de l\'IA', icon: <Brain size={20} />, to: '/about' },
    { name: 'Innovations', icon: <Lightbulb size={20} />, to: '/innovations' },
    { name: 'Forum', icon: <MessageSquare size={20} />, to: '/forum' },
    { name: 'Ressources', icon: <BookOpen size={20} />, to: '/resources' },
    { name: 'Contact', icon: <Mail size={20} />, to: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">AI Hub</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-black/20 transition-colors"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black/20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/20"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;