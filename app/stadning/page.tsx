import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Städtjänster | Mokrani Group",
  description: "Byggstäd och städning för företag och privatpersoner i Stockholm.",
};

const sections = [
  {
    "heading": "Vi städar",
    "text": "",
    "items": [
      "Byggstäd",
      "Slutstäd efter renovering",
      "Kontorsstäd",
      "Städning för privatpersoner"
    ]
  }
];

export default function Page() {
  return <ServicePage title="Städtjänster" intro="Vi städar efter byggjobb och erbjuder städning för företag och privatpersoner." sections={sections} />;
}
