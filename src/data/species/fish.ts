import { Breed } from '@/components/BreedCard';

export const fishBreeds: Breed[] = [
  {
    id: 'betta',
    name: 'Betta Fish',
    species: 'fish',
    subCategory: 'tropical',
    traits: ['Colorful', 'Territorial', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1520366498724-709889c0c685?auto=format&fit=crop&q=80',
    popularity: 1
  },
  // Add more fish breeds as needed
];

export const fishSubCategories = [
  { id: 'tropical', label: 'Tropical Fish' },
  { id: 'coldwater', label: 'Coldwater Fish' },
  { id: 'marine', label: 'Marine Fish' },
  { id: 'cichlids', label: 'Cichlids' },
];