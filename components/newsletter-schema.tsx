export default function NewsletterSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsletterPosting",
          "headline": "The Catician Newsletter",
          "description": "Science, AI, and curiosity — with a feline twist. Your go-to space for clever takes on cosmic science, AI research, and everything delightfully nerdy.",
          "publisher": {
            "@type": "Organization",
            "name": "The Catician",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thecatician.com/logo.png"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "science newsletter, AI newsletter, tech newsletter, science communication",
          "isAccessibleForFree": true,
          "frequency": "Weekly",
          "audience": {
            "@type": "Audience",
            "name": "Science and Technology Enthusiasts"
          }
        })
      }}
    />
  );
}
