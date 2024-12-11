import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.petvise.ai/Branding/logo%2Bhorizontatext.svg"
              alt="PetVise"
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-textDark hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/breed-guide/dogs" className="text-textDark hover:text-primary transition-colors">
              Dogs
            </Link>
            <Link to="/breed-guide/cats" className="text-textDark hover:text-primary transition-colors">
              Cats
            </Link>
            <Link to="/breed-guide/birds" className="text-textDark hover:text-primary transition-colors">
              Birds
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};