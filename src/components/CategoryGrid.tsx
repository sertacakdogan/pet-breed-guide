import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type Species } from './SpeciesFilter';
import { BreedCard } from './BreedCard';
import { CategoryFilters } from './category/CategoryFilters';
import { CategorySort, type SortOption } from './category/CategorySort';
import { CategoryPagination } from './category/CategoryPagination';
import { dogBreeds, dogSubCategories } from '@/data/species/dogs';
import { catBreeds, catSubCategories } from '@/data/species/cats';
import { birdBreeds, birdSubCategories } from '@/data/species/birds';
import { fishBreeds, fishSubCategories } from '@/data/species/fish';
import { smallMammalBreeds, smallMammalSubCategories } from '@/data/species/small-mammals';
import { exoticBreeds, exoticSubCategories } from '@/data/species/exotic';
import { farmBreeds, farmSubCategories } from '@/data/species/farm';
import { reptileBreeds, reptileSubCategories } from '@/data/species/reptiles';
import { insectBreeds, insectSubCategories } from '@/data/species/insects';

const ITEMS_PER_PAGE = 10;

export const CategoryGrid = () => {
  const navigate = useNavigate();
  const { species, page = "1" } = useParams();
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const currentPage = parseInt(page, 10) || 1;

  const handleSpeciesSelect = (selectedSpecies: Species) => {
    setSelectedSubCategories([]);
    navigate(`/pet-breed-guides/${selectedSpecies}`);
  };

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategories(prev => 
      prev.includes(subCategory)
        ? prev.filter(sc => sc !== subCategory)
        : [...prev, subCategory]
    );
  };

  const getSubCategories = () => {
    switch (species) {
      case 'dogs': return dogSubCategories;
      case 'cats': return catSubCategories;
      case 'birds': return birdSubCategories;
      case 'fish': return fishSubCategories;
      case 'small-mammals': return smallMammalSubCategories;
      case 'exotic': return exoticSubCategories;
      case 'farm': return farmSubCategories;
      case 'reptiles': return reptileSubCategories;
      case 'insects': return insectSubCategories;
      default: return [];
    }
  };

  const getAllBreeds = () => {
    switch (species) {
      case 'dogs': return dogBreeds;
      case 'cats': return catBreeds;
      case 'birds': return birdBreeds;
      case 'fish': return fishBreeds;
      case 'small-mammals': return smallMammalBreeds;
      case 'exotic': return exoticBreeds;
      case 'farm': return farmBreeds;
      case 'reptiles': return reptileBreeds;
      case 'insects': return insectBreeds;
      default: return [];
    }
  };

  const filteredBreeds = species
    ? getAllBreeds().filter(breed => 
        selectedSubCategories.length === 0 || 
        selectedSubCategories.includes(breed.subCategory)
      )
    : [];

  const sortedBreeds = [...filteredBreeds].sort((a, b) => {
    switch (sortOption) {
      case 'asc': return a.name.localeCompare(b.name);
      case 'desc': return b.name.localeCompare(a.name);
      default: return (a.popularity || 0) - (b.popularity || 0);
    }
  });

  const totalPages = Math.ceil(sortedBreeds.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBreeds = sortedBreeds.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (species) {
      navigate(`/pet-breed-guides/${species}/page/${newPage}`);
    }
  };

  return (
    <div className="space-y-6">
      <CategoryFilters
        species={species}
        selectedSubCategories={selectedSubCategories}
        onSpeciesSelect={handleSpeciesSelect}
        onSubCategoryChange={handleSubCategoryChange}
        getSubCategories={getSubCategories}
      />
      
      <div className="grid grid-cols-[200px_1fr] gap-6">
        <aside>
          {species && getSubCategories().length > 0 && (
            <div className="space-y-4">
              <h4 className="font-medium">Sub Categories</h4>
              {getSubCategories().map((subCategory) => (
                <div key={subCategory.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={subCategory.id}
                    checked={selectedSubCategories.includes(subCategory.id)}
                    onChange={() => handleSubCategoryChange(subCategory.id)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={subCategory.id}>{subCategory.label}</label>
                </div>
              ))}
            </div>
          )}
        </aside>
        
        <div>
          <CategorySort
            sortOption={sortOption}
            onSortChange={(value: SortOption) => setSortOption(value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>

          <CategoryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};