export const mockBreedData = {
  metadata: {
    id: "golden-retriever",
    createdAt: "2024-02-20T12:00:00Z",
    updatedAt: "2024-02-20T12:00:00Z",
    author: "Pet Expert",
    category: "dogs",
    tags: ["friendly", "family-dog", "sporting-group"],
    status: "published",
    seoMetadata: {
      title: "Golden Retriever Breed Guide",
      description: "Complete guide to Golden Retriever breed characteristics, care, and training",
      keywords: ["golden retriever", "dog breed", "family dog"],
      canonicalUrl: "/breeds/dogs/golden-retriever"
    }
  },
  content: {
    title: {
      text: "Golden Retriever: The Perfect Family Companion",
      level: "h1"
    },
    description: {
      text: "Discover everything you need to know about Golden Retrievers, from their friendly personality to their care requirements.",
      wordCount: 20,
      estimatedReadingTime: "8 min"
    },
    featuredMedia: {
      url: "https://example.com/golden-retriever-hero.jpg",
      alt: "Golden Retriever in a field"
    },
    sections: [
      {
        id: "characteristics",
        title: {
          text: "Breed Characteristics",
          level: "h2",
          emoji: "🦮"
        },
        introduction: {
          text: "Golden Retrievers are known for their distinctive features and temperament.",
          wordCount: 11
        },
        contentBlocks: [
          {
            blockId: "main-traits",
            type: "contentGroup",
            elements: [
              {
                type: "table",
                data: "Size: Large\nWeight: 55-75 pounds\nLifespan: 10-12 years\nCoat: Double coat, water-repellent"
              },
              {
                type: "followUpText",
                text: "Golden Retrievers are medium to large dogs known for their beautiful golden coat."
              }
            ]
          }
        ]
      }
    ],
    callToAction: {
      text: "Ready to Learn More About Golden Retrievers?",
      primaryButton: {
        text: "Find a Breeder",
        url: "#find-breeder"
      },
      secondaryButton: {
        text: "Care Guide",
        url: "#care-guide"
      }
    },
    faq: {
      questions: [
        {
          question: "Are Golden Retrievers good with children?",
          answer: "Yes, Golden Retrievers are excellent with children. They are known for their gentle nature and patience."
        },
        {
          question: "How much exercise do Golden Retrievers need?",
          answer: "Golden Retrievers need about 1-2 hours of exercise daily to stay healthy and happy."
        }
      ]
    },
    resources: {
      links: [
        {
          text: "Golden Retriever Club of America",
          url: "https://grca.org",
          description: "Official breed club with extensive resources and information."
        },
        {
          text: "Training Guide",
          url: "#training",
          description: "Comprehensive guide to training your Golden Retriever."
        }
      ]
    }
  }
};