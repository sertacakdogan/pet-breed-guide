import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dog, Cat, Bird, Fish, Rabbit, 
  Lion, Horse, Snake, Bug 
} from 'lucide-react';

const categories = [
  { name: 'Dogs', icon: Dog, href: '/breeds/dogs' },
  { name: 'Cats', icon: Cat, href: '/breeds/cats' },
  { name: 'Birds', icon: Bird, href: '/breeds/birds' },
  { name: 'Aquatic Pets', icon: Fish, href: '/breeds/aquatic' },
  { name: 'Small Mammals', icon: Rabbit, href: '/breeds/small-mammals' },
  { name: 'Exotic Mammals', icon: Lion, href: '/breeds/exotic' },
  { name: 'Farm Animals', icon: Horse, href: '/breeds/farm' },
  { name: 'Reptiles & Amphibians', icon: Snake, href: '/breeds/reptiles' },
  { name: 'Insects', icon: Bug, href: '/breeds/insects' },
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.name}
            to={category.href}
            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-textDark group-hover:text-primary transition-colors">
                {category.name}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};