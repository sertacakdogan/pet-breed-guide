import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FeaturedMedia } from './FeaturedMedia';

interface ContentBlock {
  blockId: string;
  type: string;
  elements?: Array<{
    type: string;
    data?: string;
    text?: string;
  }>;
  text?: string;
  url?: string;
  isExternal?: boolean;
  media?: {
    url: string;
    alt: string;
  };
}

interface Section {
  id: string;
  title: {
    text: string;
    level: string;
    emoji?: string;
  };
  introduction: {
    text: string;
    wordCount: number;
  };
  contentBlocks: ContentBlock[];
  media?: {
    url: string;
    alt: string;
  };
}

const renderRichText = (text: string) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export const BreedContent = ({ sections }: { sections: Section[] }) => {
  const renderContentBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'contentGroup':
        return (
          <div key={block.blockId} className="space-y-6">
            {block.elements?.map((element, index) => {
              if (element.type === 'table' && element.data) {
                return (
                  <Table key={index}>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Characteristic</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Example</TableCell>
                        <TableCell>{renderRichText(element.data)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                );
              }
              return (
                <p key={index} className="text-muted-foreground">
                  {renderRichText(element.text || '')}
                </p>
              );
            })}
          </div>
        );
      case 'link':
        return (
          <a
            key={block.blockId}
            href={block.url}
            target={block.isExternal ? "_blank" : undefined}
            rel={block.isExternal ? "noopener noreferrer" : undefined}
            className="text-primary hover:underline"
          >
            {renderRichText(block.text || '')}
          </a>
        );
      default:
        return (
          <p key={block.blockId} className="text-muted-foreground">
            {renderRichText(block.text || '')}
          </p>
        );
    }
  };

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} className="space-y-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            {section.title.emoji && <span>{section.title.emoji}</span>}
            {section.title.text}
          </h2>
          <p className="text-lg text-muted-foreground">
            {renderRichText(section.introduction.text)}
          </p>
          <div className="space-y-6">
            {section.contentBlocks.map(renderContentBlock)}
          </div>
          {section.media && (
            <FeaturedMedia url={section.media.url} alt={section.media.alt} />
          )}
        </section>
      ))}
    </div>
  );
};