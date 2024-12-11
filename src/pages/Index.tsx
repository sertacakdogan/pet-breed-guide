import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CategoryGrid } from '@/components/CategoryGrid';
import { Header } from '@/components/Header';

const Index = () => {
  const { species } = useParams();

  const getBreadcrumbItems = () => {
    const items = [{ label: 'Breed Guide', href: '/' }];
    
    if (species) {
      items.push({
        label: species.charAt(0).toUpperCase() + species.slice(1),
        href: `/breed-guide/${species}`
      });
    }
    
    return items;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={getBreadcrumbItems()} />
        <h1 className="text-4xl font-bold text-textDark mb-8 mt-4">
          {species 
            ? `${species.charAt(0).toUpperCase() + species.slice(1)} Breed Guide`
            : 'Pet Breed Guide'
          }
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover comprehensive information about different pet breeds across various species.
        </p>
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;