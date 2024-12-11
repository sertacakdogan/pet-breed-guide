import { Breed } from '@/components/BreedCard';

export const dogBreeds: Breed[] = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    species: 'dogs',
    subCategory: 'sporting',
    traits: ['Friendly', 'Intelligent', 'Devoted'],
    imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80',
    popularity: 1
  },
  {
    id: 'german-shepherd',
    name: 'German Shepherd',
    species: 'dogs',
    subCategory: 'working',
    traits: ['Loyal', 'Confident', 'Courageous'],
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80',
    popularity: 2
  },
  {
    id: 'labrador-retriever',
    name: 'Labrador Retriever',
    species: 'dogs',
    subCategory: 'sporting',
    traits: ['Outgoing', 'Even-tempered', 'Gentle'],
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&q=80',
    popularity: 3
  },
  {
    id: 'french-bulldog',
    name: 'French Bulldog',
    species: 'dogs',
    subCategory: 'non-sporting',
    traits: ['Playful', 'Adaptable', 'Smart'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
    popularity: 4
  },
  {
    id: 'poodle',
    name: 'Poodle',
    species: 'dogs',
    subCategory: 'non-sporting',
    traits: ['Elegant', 'Intelligent', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1604916287784-c324202b3205?auto=format&fit=crop&q=80',
    popularity: 5
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    species: 'dogs',
    subCategory: 'working',
    traits: ['Loyal', 'Confident', 'Strong'],
    imageUrl: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&q=80',
    popularity: 6
  },
  {
    id: 'yorkshire-terrier',
    name: 'Yorkshire Terrier',
    species: 'dogs',
    subCategory: 'toy',
    traits: ['Feisty', 'Brave', 'Affectionate'],
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80',
    popularity: 7
  },
  {
    id: 'boxer',
    name: 'Boxer',
    species: 'dogs',
    subCategory: 'working',
    traits: ['Fun-loving', 'Bright', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?auto=format&fit=crop&q=80',
    popularity: 8
  },
  {
    id: 'dachshund',
    name: 'Dachshund',
    species: 'dogs',
    subCategory: 'hound',
    traits: ['Clever', 'Stubborn', 'Devoted'],
    imageUrl: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&q=80',
    popularity: 9
  },
  {
    id: 'beagle',
    name: 'Beagle',
    species: 'dogs',
    subCategory: 'hound',
    traits: ['Merry', 'Friendly', 'Determined'],
    imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80',
    popularity: 10
  },
  {
    id: 'siberian-husky',
    name: 'Siberian Husky',
    species: 'dogs',
    subCategory: 'working',
    traits: ['Outgoing', 'Mischievous', 'Loyal'],
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80',
    popularity: 11
  },
];

export const dogSubCategories = [
  { id: 'sporting', label: 'Sporting Dogs' },
  { id: 'hound', label: 'Hounds' },
  { id: 'working', label: 'Working Dogs' },
  { id: 'terrier', label: 'Terriers' },
  { id: 'toy', label: 'Toy Dogs' },
  { id: 'non-sporting', label: 'Non-Sporting Dogs' },
  { id: 'herding', label: 'Herding Dogs' },
];
