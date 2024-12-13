import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BreedContent } from '@/components/breed/BreedContent';
import { BreedFAQ } from '@/components/breed/BreedFAQ';
import { BreedResources } from '@/components/breed/BreedResources';
import { BreedCallToAction } from '@/components/breed/BreedCallToAction';
import { FeaturedMedia } from '@/components/breed/FeaturedMedia';
import { Header } from '@/components/Header';
import breedData from '@/data/breeds.json';
import { Helmet } from 'react-helmet';

const BreedDetail = () => {
  const { species, breedId } = useParams();
  const breed = species && breedId ? breedData[species]?.[breedId] : null;

  if (!breed) {
    return <div>Breed not found</div>;
  }

  const breadcrumbItems = [
    { 
      label: species.charAt(0).toUpperCase() + species.slice(1), 
      href: `/pet-breed-guides/${species}` 
    },
    { 
      label: breed.name, 
      href: `/breeds/${species}/${breedId}` 
    },
  ];

  const sections = [
    {
      id: "overview",
      title: {
        text: "Overview",
        level: "h2",
        emoji: "🐾"
      },
      introduction: {
        text: breed.description_short,
        wordCount: breed.description_short.split(' ').length
      },
      contentBlocks: [
        {
          blockId: "main-content",
          type: "contentGroup",
          elements: [
            {
              type: "text",
              text: breed.seo_content
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fcfc]">
      <Helmet>
        <title>{`${breed.name} | PetVise`}</title>
        <meta name="description" content={breed.description_short} />
        <link rel="canonical" href={`https://petvise.ai/breeds/${species}/${breedId}`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="max-w-4xl mx-auto mt-8 space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{breed.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {breed.description_short}
            </p>
          </header>

          <FeaturedMedia 
            url={breed.imageUrl} 
            alt={breed.name} 
          />

          <BreedContent sections={sections} />
          
          <BreedCallToAction 
            callToAction={{
              text: `Ready to Learn More About ${breed.name}s?`,
              primaryButton: {
                text: "Get the App",
                url: "https://onelink.to/ne9s7r"
              },
              secondaryButton: {
                text: "Browse More Breeds",
                url: `/pet-breed-guides/${species}`
              }
            }} 
          />
        </article>
      </main>
    </div>
  );
};

export default BreedDetail;