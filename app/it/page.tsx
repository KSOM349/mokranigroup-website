import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "IT-support & nätverk för företag i Stockholm | Mokrani Group",
  description: "IT-support, nätverk, Microsoft 365 och Azure för företag i Stockholm. Vi hjälper dig med drift, säkerhet och backup. Begär offert.",
};

const sections = [
  {
    "heading": "IT-support",
    "text": "",
    "items": [
      "Felsökning",
      "Hjälp till användare",
      "Installation av datorer och program"
    ]
  },
  {
    "heading": "Nätverk",
    "text": "",
    "items": [
      "Nätverksinstallation",
      "WiFi och router",
      "Kabeldragning"
    ]
  },
  {
    "heading": "Moln och servrar",
    "text": "",
    "items": [
      "Microsoft 365",
      "Azure",
      "Serveradministration"
    ]
  },
  {
    "heading": "IT-säkerhet",
    "text": "",
    "items": [
      "Backup",
      "Tvåstegsverifiering",
      "Skydd mot virus och phishing"
    ]
  }
];

export default function Page() {
  return <ServicePage title="IT & nätverk" intro="Vi hjälper företag med IT-drift, nätverk och molntjänster så att vardagen fungerar." sections={sections} />;
}
