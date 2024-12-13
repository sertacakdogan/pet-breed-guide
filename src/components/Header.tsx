import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const speciesList = [
  { id: 'cats', label: 'Cats' },
  { id: 'dogs', label: 'Dogs' },
  { id: 'birds', label: 'Birds' },
  { id: 'fish', label: 'Fish' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.petvise.ai/Branding/logo%2Bhorizontatext.svg"
              alt="PetVise"
              className="h-8"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/pet-breed-guides" 
              className="text-textDark hover:text-primary transition-colors"
            >
              Pet Breed Guides
            </Link>
            <a
              href="https://onelink.to/ne9s7r"
              className="bg-primary text-white px-6 py-2 rounded-[58px] hover:bg-primary/90 transition-colors"
            >
              Get the App
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link to="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Accordion type="single" collapsible defaultValue="pet-guides">
                    <AccordionItem value="pet-guides">
                      <AccordionTrigger>Pet Breed Guides</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {speciesList.map((species) => (
                            <Link
                              key={species.id}
                              to={`/pet-breed-guides/${species.id}`}
                              className="text-sm hover:text-primary transition-colors"
                            >
                              {species.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                <div className="absolute bottom-8 left-6 right-6">
                  <a
                    href="https://onelink.to/ne9s7r"
                    className="w-full bg-primary text-white px-6 py-2 rounded-[58px] hover:bg-primary/90 transition-colors text-center block"
                  >
                    Get the App
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <a
          href="https://onelink.to/ne9s7r"
          className="block w-full bg-primary text-white px-6 py-3 rounded-[58px] text-center font-medium"
        >
          Get the App
        </a>
      </div>
    </header>
  );
};