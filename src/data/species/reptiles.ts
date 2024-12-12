import { Breed } from '@/components/BreedCard';

export const reptileBreeds: Breed[] = [
  {
    id: 'bearded-dragon',
    name: 'Bearded Dragon',
    species: 'reptiles',
    subCategory: 'lizards',
    traits: ['Docile', 'Hardy', 'Social'],
    imageUrl: 'https://images.unsplash.com/photo-1534295983867-d6d8f7288d2f?auto=format&fit=crop&q=80',
    popularity: 1
  },
];

export const reptileSubCategories = [
  { id: 'lizards', label: 'Lizards' },
  { id: 'snakes', label: 'Snakes' },
  { id: 'turtles', label: 'Turtles' },
  { id: 'tortoises', label: 'Tortoises' },
];