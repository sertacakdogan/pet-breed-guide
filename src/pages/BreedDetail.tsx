import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BreedContent } from '@/components/breed/BreedContent';
import { BreedFAQ } from '@/components/breed/BreedFAQ';
import { BreedResources } from '@/components/breed/BreedResources';
import { BreedCallToAction } from '@/components/breed/BreedCallToAction';
import { FeaturedMedia } from '@/components/breed/FeaturedMedia';

// Temporary mock data - replace with actual data fetching
import { mockBreedData } from '@/data/mockBreedData';

const BreedDetail = () => {
  const { species, breedId } = useParams();
  const data = mockBreedData; // Replace with actual data fetching

  const breadcrumbItems = [
    { label: 'Breed Guide', href: '/' },
    { label: species?.charAt(0).toUpperCase() + species?.slice(1) || '', href: `/breed-guide/${species}` },
    { label: data.content.title.text, href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="max-w-4xl mx-auto mt-8 space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{data.content.title.text}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={data.metadata.createdAt}>
                {new Date(data.metadata.createdAt).toLocaleDateString()}
              </time>
              <span>•</span>
              <span>{data.content.description.estimatedReadingTime} read</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.content.description.text}
            </p>
          </header>

          {data.content.featuredMedia && (
            <FeaturedMedia 
              url={data.content.featuredMedia.url} 
              alt={data.content.featuredMedia.alt} 
            />
          )}

          <BreedContent sections={data.content.sections} />
          
          {data.content.faq.questions.length > 0 && (
            <BreedFAQ questions={data.content.faq.questions} />
          )}
          
          <BreedCallToAction callToAction={data.content.callToAction} />
          
          {data.content.resources.links.length > 0 && (
            <BreedResources resources={data.content.resources.links} />
          )}
        </article>
      </main>
    </div>
  );
};

export default BreedDetail;