import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

interface SeoContentProps {
  content: string;
}

export const SeoContent = ({ content }: SeoContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-8 bg-white rounded-lg p-6">
      <div
        className={cn(
          "prose max-w-none",
          !isExpanded && "line-clamp-[10]"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button
        variant="ghost"
        className="mt-4 flex items-center gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="h-4 w-4" />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown className="h-4 w-4" />
            Read More
          </>
        )}
      </Button>
    </div>
  );
};