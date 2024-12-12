import { Breed } from '@/components/BreedCard';

export const birdBreeds: Breed[] = [
  {
    id: 'budgerigar',
    name: 'Budgerigar',
    species: 'birds',
    subCategory: 'parakeets',
    traits: ['Social', 'Intelligent', 'Playful'],
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80',
    popularity: 1
  },
  // Add more bird breeds as needed
];

export const birdSubCategories = [
  { id: 'parakeets', label: 'Parakeets' },
  { id: 'finches', label: 'Finches' },
  { id: 'parrots', label: 'Parrots' },
  { id: 'cockatiels', label: 'Cockatiels' },
  { id: 'canaries', label: 'Canaries' },
];