import { Breed } from '@/components/BreedCard';

export const breeds: Breed[] = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    species: 'dogs',
    traits: ['Friendly', 'Intelligent', 'Devoted'],
    imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80',
  },
  {
    id: 'persian',
    name: 'Persian',
    species: 'cats',
    traits: ['Gentle', 'Quiet', 'Sweet'],
    imageUrl: 'https://images.unsplash.com/photo-1617642171292-e480663e3762?auto=format&fit=crop&q=80',
  },
  {
    id: 'budgie',
    name: 'Budgerigar',
    species: 'birds',
    traits: ['Playful', 'Social', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?auto=format&fit=crop&q=80',
  },
  // Add more breeds as needed
];