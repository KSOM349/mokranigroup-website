export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Mokrani Group",
    url: "https://www.mokranigroup.com",
    telephone: "+46760949466",
    email: "info@mokranigroup.com",
    description: "Bygg, golvläggning, IT och städ i Stockholm.",
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
    areaServed: "Stockholm",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
