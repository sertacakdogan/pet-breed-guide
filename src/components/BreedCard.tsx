import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from '@/lib/utils';

export interface Breed {
  id: string;
  name: string;
  species: string;
  subCategory: string;
  traits: string[];
  imageUrl: string;
  popularity?: number;
  description_short?: string;
  energy?: string;
  size?: string;
  good_with_kids?: string;
}

interface BreedCardProps {
  breed: Breed;
  isMobile?: boolean;
}

export const BreedCard = ({ breed, isMobile }: BreedCardProps) => {
  if (isMobile) {
    return (
      <Link to={`/breeds/${breed.species}/${breed.id}`} className="block">
        <div className="flex items-center space-x-4 p-4 bg-[#f8fcfc] rounded-lg">
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={breed.imageUrl}
              alt={breed.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
            <div className="flex flex-wrap gap-2">
              {breed.energy && (
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                  {breed.energy}
                </span>
              )}
              {breed.size && (
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                  {breed.size}
                </span>
              )}
              {breed.good_with_kids && (
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                  {breed.good_with_kids}
                </span>
              )}
            </div>
            {breed.description_short && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-1">
                {breed.description_short}
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/breeds/${breed.species}/${breed.id}`} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#f8fcfc]">
        <div className="aspect-square overflow-hidden">
          <img
            src={breed.imageUrl}
            alt={breed.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <h3 className="text-xl font-semibold">{breed.name}</h3>
          {breed.description_short && (
            <p className="text-sm text-gray-600 line-clamp-1">
              {breed.description_short}
            </p>
          )}
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {breed.traits.map((trait, index) => (
              <span
                key={index}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};