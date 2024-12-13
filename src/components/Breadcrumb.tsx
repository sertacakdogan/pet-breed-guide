import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/pet-breed-guides"
            className="text-gray-600 hover:text-primary"
          >
            Pet Breed Guides
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            <Link
              to={item.href}
              className={`inline-flex items-center text-sm font-medium ${
                index === items.length - 1
                  ? 'text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};