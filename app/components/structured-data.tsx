import Script from "next/script"

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Greysky Digital",
          description:
            "Boutique digital agency specializing in helping founders bring fully functional MVPs to market quickly.",
          url: "https://greysky.io",
          logo: "https://greysky.io/logo.png",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Pacific Northwest",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            // Replace with your actual coordinates
            latitude: "47.6062",
            longitude: "-122.3321",
          },
          sameAs: [
            "https://twitter.com/greyskyio",
          ], // add linkedin, github, insta
          openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
          priceRange: "$$",
          telephone: "+1-425-394-6132",
          email: "taylor@greysky.io",
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "47.6062",
              longitude: "-122.3321",
            },
            geoRadius: "50000",
          },
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "MVP Development",
                description:
                  "Building functional MVPs that work, look legit, and won't fall apart when investors start poking around.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Technical Strategy",
                description: "Honest technical guidance that saves you money and focuses on what you actually need.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rapid Prototyping",
                description: "Fast development of working prototypes that get your product to market quickly.",
              },
            },
          ],
        }),
      }}
    />
  )
}
