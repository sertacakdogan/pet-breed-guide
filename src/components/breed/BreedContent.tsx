import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
}

export const BreedContent = ({ sections }: { sections: Section[] }) => {
  const renderContentBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'contentGroup':
        return (
          <div key={block.blockId} className="space-y-6">
            {block.elements?.map((element, index) => {
              if (element.type === 'table' && element.data) {
                // Parse table data and render
                return (
                  <Table key={index}>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Characteristic</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Replace with actual table data parsing */}
                      <TableRow>
                        <TableCell>Example</TableCell>
                        <TableCell>{element.data}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                );
              }
              return (
                <p key={index} className="text-muted-foreground">
                  {element.text}
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
            {block.text}
          </a>
        );
      default:
        return (
          <p key={block.blockId} className="text-muted-foreground">
            {block.text}
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
            {section.introduction.text}
          </p>
          <div className="space-y-6">
            {section.contentBlocks.map(renderContentBlock)}
          </div>
        </section>
      ))}
    </div>
  );
};