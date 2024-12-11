import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SpeciesFilter, type Species } from './SpeciesFilter';
import { BreedCard } from './BreedCard';
import { breeds } from '@/data/breeds';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 10;

export const CategoryGrid = () => {
  const navigate = useNavigate();
  const { species, page = "1" } = useParams();
  const currentPage = parseInt(page, 10) || 1;

  const handleSpeciesSelect = (selectedSpecies: Species) => {
    navigate(`/breed-guide/${selectedSpecies}`);
  };

  const filteredBreeds = species
    ? breeds.filter((breed) => breed.species === species)
    : breeds;

  const totalPages = Math.ceil(filteredBreeds.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBreeds = filteredBreeds.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (species) {
      navigate(`/breed-guide/${species}/page/${newPage}`);
    } else {
      navigate(`/page/${newPage}`);
    }
  };

  return (
    <div>
      <SpeciesFilter
        selectedSpecies={species as Species || null}
        onSpeciesSelect={handleSpeciesSelect}
      />
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
  );
};