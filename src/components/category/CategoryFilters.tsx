import React from 'react';
import { Check } from 'lucide-react';
import { SpeciesFilter, type Species } from '../SpeciesFilter';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface CategoryFiltersProps {
  species: string | undefined;
  selectedSubCategories: string[];
  onSpeciesSelect: (species: Species) => void;
  onSubCategoryChange: (subCategory: string) => void;
  getSubCategories: () => Array<{ id: string; label: string; }>;
}

export const CategoryFilters = ({
  species,
  selectedSubCategories,
  onSpeciesSelect,
  onSubCategoryChange,
  getSubCategories,
}: CategoryFiltersProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6">
      <SpeciesFilter
        selectedSpecies={species as Species || null}
        selectedSubCategories={selectedSubCategories}
        onSpeciesSelect={onSpeciesSelect}
        onSubCategoryChange={onSubCategoryChange}
        availableSubCategories={getSubCategories()}
      />
      
      {species && getSubCategories().length > 0 && (
        <div className={`${isMobile ? 'flex flex-wrap gap-2' : 'hidden'}`}>
          {getSubCategories().map((subCategory) => (
            <Button
              key={subCategory.id}
              variant="outline"
              onClick={() => onSubCategoryChange(subCategory.id)}
              className={`rounded-full flex items-center gap-2 ${
                selectedSubCategories.includes(subCategory.id)
                  ? 'border-primary text-primary'
                  : ''
              }`}
            >
              {selectedSubCategories.includes(subCategory.id) && (
                <Check className="w-4 h-4" />
              )}
              {subCategory.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};