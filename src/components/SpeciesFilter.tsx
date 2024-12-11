import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Species = 'dogs' | 'cats' | 'birds' | 'fish' | 'rabbits' | 'insects' | 'exotic' | 'farm' | 'reptiles';

interface SpeciesFilterProps {
  selectedSpecies: Species | null;
  onSpeciesSelect: (species: Species) => void;
}

const speciesList: { id: Species; label: string }[] = [
  { id: 'dogs', label: 'Dogs' },
  { id: 'cats', label: 'Cats' },
  { id: 'birds', label: 'Birds' },
  { id: 'fish', label: 'Fish' },
  { id: 'rabbits', label: 'Rabbits' },
  { id: 'exotic', label: 'Exotic' },
  { id: 'farm', label: 'Farm' },
  { id: 'reptiles', label: 'Reptiles' },
  { id: 'insects', label: 'Insects' },
];

export const SpeciesFilter = ({ selectedSpecies, onSpeciesSelect }: SpeciesFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {speciesList.map((species) => (
        <Button
          key={species.id}
          variant={selectedSpecies === species.id ? "default" : "outline"}
          className={cn(
            "rounded-full",
            selectedSpecies === species.id && "bg-primary text-white hover:bg-primary/90"
          )}
          onClick={() => onSpeciesSelect(species.id)}
        >
          {species.label}
        </Button>
      ))}
    </div>
  );
};