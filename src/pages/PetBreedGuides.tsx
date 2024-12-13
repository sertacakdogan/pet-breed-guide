import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface SpeciesCard {
  name: string;
  description: string;
  imageUrl: string;
  emojis: string[];
  slug: string;
}

const speciesData: SpeciesCard[] = [
  {
    name: 'Dogs',
    description: 'Loyal companions for every lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    emojis: ['🐕', '🦮'],
    slug: 'dogs'
  },
  {
    name: 'Cats',
    description: 'Independent and loving feline friends',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    emojis: ['🐱', '😺'],
    slug: 'cats'
  },
  {
    name: 'Birds',
    description: 'Colorful and intelligent avian companions',
    imageUrl: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890',
    emojis: ['🦜', '🦩'],
    slug: 'birds'
  },
  {
    name: 'Fish',
    description: 'Peaceful aquatic pets for your home',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00',
    emojis: ['🐠', '🐟'],
    slug: 'fish'
  }
];

const PetBreedGuides = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-textDark mb-4">
          Pet Breed Guides
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our comprehensive guides to discover the perfect companion for your lifestyle. 
          Learn about various breeds and their unique needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {speciesData.map((species) => (
            <Link 
              key={species.slug}
              to={`/pet-breed-guides/${species.slug}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img
                      src={species.imageUrl}
                      alt={species.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-textDark mb-2">
                    {species.name} {species.emojis.map(emoji => emoji).join(' ')}
                  </h2>
                  <p className="text-gray-600">{species.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-textDark mb-4">
            Why Proper Pet Care is Important
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-primary hover:text-primary/90 transition-colors mb-4"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 mr-2" />
            ) : (
              <ChevronDown className="w-5 h-5 mr-2" />
            )}
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          <div className={`transition-all duration-300 ${isExpanded ? 'block' : 'hidden md:block'}`}>
            <p className="text-gray-600 leading-relaxed">
              Understanding different pet breeds is crucial for responsible pet ownership. Each breed comes with its own unique characteristics, care requirements, and personality traits. Our comprehensive breed guides help you make informed decisions about which pet will best suit your lifestyle, living situation, and family dynamics. From exercise needs and grooming requirements to temperament and health considerations, we provide detailed information to ensure a harmonious relationship between you and your future pet companion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetBreedGuides;