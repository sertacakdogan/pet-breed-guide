import React from 'react';
import { SpeciesFilter, type Species } from '../SpeciesFilter';

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
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <SpeciesFilter
          selectedSpecies={species as Species || null}
          selectedSubCategories={selectedSubCategories}
          onSpeciesSelect={onSpeciesSelect}
          onSubCategoryChange={onSubCategoryChange}
          availableSubCategories={getSubCategories()}
        />
      </div>
      
      {species && getSubCategories().length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium">Sub Categories</h4>
          {getSubCategories().map((subCategory) => (
            <div key={subCategory.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={subCategory.id}
                checked={selectedSubCategories.includes(subCategory.id)}
                onChange={() => onSubCategoryChange(subCategory.id)}
                className="rounded border-gray-300"
              />
              <label htmlFor={subCategory.id}>{subCategory.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};