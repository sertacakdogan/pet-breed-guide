import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Resource {
  text: string;
  url: string;
  description: string;
}

export const BreedResources = ({ resources }: { resources: Resource[] }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Additional Resources</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {resource.text}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};