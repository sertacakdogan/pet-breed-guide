import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export type Species = 'dogs' | 'cats' | 'birds' | 'fish' | 'small-mammals' | 'insects' | 'exotic' | 'farm' | 'reptiles';

interface SpeciesFilterProps {
  selectedSpecies: Species | null;
  selectedSubCategories: string[];
  onSpeciesSelect: (species: Species) => void;
  onSubCategoryChange: (subCategory: string) => void;
  availableSubCategories: { id: string; label: string; }[];
}

const speciesList: { id: Species; label: string }[] = [
  { id: 'dogs', label: 'Dogs' },
  { id: 'cats', label: 'Cats' },
  { id: 'birds', label: 'Birds' },
  { id: 'fish', label: 'Fish' },
  { id: 'small-mammals', label: 'Small Mammals' },
  { id: 'exotic', label: 'Exotic' },
  { id: 'farm', label: 'Farm' },
  { id: 'reptiles', label: 'Reptiles' },
  { id: 'insects', label: 'Insects' },
];

export const SpeciesFilter = ({ 
  selectedSpecies, 
  selectedSubCategories,
  onSpeciesSelect, 
  onSubCategoryChange,
  availableSubCategories 
}: SpeciesFilterProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
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
    </div>
  );
};