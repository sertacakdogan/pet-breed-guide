import { Breed } from '@/components/BreedCard';

export const farmBreeds: Breed[] = [
  {
    id: 'miniature-horse',
    name: 'Miniature Horse',
    species: 'farm',
    subCategory: 'horses',
    traits: ['Gentle', 'Intelligent', 'Social'],
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80',
    popularity: 1
  },
];

export const farmSubCategories = [
  { id: 'horses', label: 'Horses' },
  { id: 'goats', label: 'Goats' },
  { id: 'sheep', label: 'Sheep' },
  { id: 'pigs', label: 'Pigs' },
  { id: 'chickens', label: 'Chickens' },
];