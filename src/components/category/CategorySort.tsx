import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type SortOption = 'default' | 'asc' | 'desc';

interface CategorySortProps {
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const CategorySort = ({ sortOption, onSortChange }: CategorySortProps) => {
  return (
    <div className="flex justify-end mb-6">
      <Select
        value={sortOption}
        onValueChange={onSortChange}
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
  );
};