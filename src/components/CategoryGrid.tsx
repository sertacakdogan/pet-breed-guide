import React, { useState } from 'react';
import { SpeciesFilter, type Species } from './SpeciesFilter';
import { BreedCard } from './BreedCard';
import { breeds } from '@/data/breeds';

export const CategoryGrid = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const filteredBreeds = selectedSpecies
    ? breeds.filter((breed) => breed.species === selectedSpecies)
    : breeds;

  return (
    <div>
      <SpeciesFilter
        selectedSpecies={selectedSpecies}
        onSpeciesSelect={setSelectedSpecies}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};