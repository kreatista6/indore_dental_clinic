import { CLINIC_NAME, CLINIC_PHONE } from "@/lib/constants";
import { publicConfig } from "@/lib/env";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_NAME,
    "image": `${publicConfig.siteUrl}/images/clinic-exterior.jpg`,
    "@id": publicConfig.siteUrl,
    "url": publicConfig.siteUrl,
    "telephone": CLINIC_PHONE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Premium Medical Hub, AB Road",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7196,
      "longitude": 75.8577
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1200"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
