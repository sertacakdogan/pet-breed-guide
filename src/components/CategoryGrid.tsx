import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SpeciesFilter, type Species } from './SpeciesFilter';
import { BreedCard } from './BreedCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { dogBreeds, dogSubCategories } from '@/data/species/dogs';
import { catBreeds, catSubCategories } from '@/data/species/cats';

const ITEMS_PER_PAGE = 10;

type SortOption = 'default' | 'asc' | 'desc';

export const CategoryGrid = () => {
  const navigate = useNavigate();
  const { species, page = "1" } = useParams();
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const currentPage = parseInt(page, 10) || 1;

  const handleSpeciesSelect = (selectedSpecies: Species) => {
    setSelectedSubCategories([]);
    navigate(`/breed-guide/${selectedSpecies}`);
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
      case 'dogs':
        return dogSubCategories;
      case 'cats':
        return catSubCategories;
      default:
        return [];
    }
  };

  const getAllBreeds = () => {
    switch (species) {
      case 'dogs':
        return dogBreeds;
      case 'cats':
        return catBreeds;
      default:
        return [];
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
      case 'asc':
        return a.name.localeCompare(b.name);
      case 'desc':
        return b.name.localeCompare(a.name);
      default:
        return (a.popularity || 0) - (b.popularity || 0);
    }
  });

  const totalPages = Math.ceil(sortedBreeds.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBreeds = sortedBreeds.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (species) {
      navigate(`/breed-guide/${species}/page/${newPage}`);
    }
  };

  return (
    <div className="grid grid-cols-[200px_1fr] gap-6">
      <aside>
        <SpeciesFilter
          selectedSpecies={species as Species || null}
          selectedSubCategories={selectedSubCategories}
          onSpeciesSelect={handleSpeciesSelect}
          onSubCategoryChange={handleSubCategoryChange}
          availableSubCategories={getSubCategories()}
        />
      </aside>
      
      <div>
        <div className="flex justify-end mb-6">
          <Select
            value={sortOption}
            onValueChange={(value: SortOption) => setSortOption(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default (Popularity)</SelectItem>
              <SelectItem value="asc">Name (A to Z)</SelectItem>
              <SelectItem value="desc">Name (Z to A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    isActive={pageNum === currentPage}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};