import { Breed } from '@/components/BreedCard';

export const smallMammalBreeds: Breed[] = [
  {
    id: 'holland-lop',
    name: 'Holland Lop',
    species: 'small-mammals',
    subCategory: 'rabbits',
    traits: ['Gentle', 'Social', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80',
    popularity: 1
  },
  // Add more small mammal breeds as needed
];

export const smallMammalSubCategories = [
  { id: 'rabbits', label: 'Rabbits' },
  { id: 'hamsters', label: 'Hamsters' },
  { id: 'guinea-pigs', label: 'Guinea Pigs' },
  { id: 'gerbils', label: 'Gerbils' },
  { id: 'ferrets', label: 'Ferrets' },
];