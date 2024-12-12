import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQQuestion {
  question: string;
  answer: string;
}

export const BreedFAQ = ({ questions }: { questions: FAQQuestion[] }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {questions.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};