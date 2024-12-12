import React from 'react';
import { Button } from "@/components/ui/button";

interface CallToAction {
  text: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

export const BreedCallToAction = ({ callToAction }: { callToAction: CallToAction }) => {
  return (
    <section className="bg-muted p-8 rounded-lg text-center space-y-6">
      <h2 className="text-2xl font-semibold">{callToAction.text}</h2>
      <div className="flex justify-center gap-4">
        <Button asChild>
          <a href={callToAction.primaryButton.url}>
            {callToAction.primaryButton.text}
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={callToAction.secondaryButton.url}>
            {callToAction.secondaryButton.text}
          </a>
        </Button>
      </div>
    </section>
  );
};