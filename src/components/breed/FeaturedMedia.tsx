import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeaturedMediaProps {
  url: string;
  alt: string;
}

export const FeaturedMedia = ({ url, alt }: FeaturedMediaProps) => {
  if (!url) return null;

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <AspectRatio ratio={16 / 9}>
        <img
          src={url}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};