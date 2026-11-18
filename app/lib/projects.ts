// Lägg till eller ta bort en rad för att ändra bilderna på sidan.
// De sex första visas på startsidan, alla visas på sidan Projekt.
// Valfritt: lägg till title och text för en bild, till exempel
// { image: "/images/golv1.jpg", title: "Parkett i hall", text: "Kort beskrivning" }
export type Project = { image: string; title?: string; text?: string };

export const projects: Project[] = [
  { image: "/images/arbete-linoleum.jpg", title: "Linoleum i korridor", text: "Färdigt golv efter avjämning." },
  { image: "/images/arbete-vatrum-hexagon.jpg", title: "Våtrumsmatta, hexagonmönster", text: "Golv och uppvik på vägg." },
  { image: "/images/arbete-linoleum-rum.jpg", title: "Linoleum i rum", text: "Färdigt golv." },
  { image: "/images/arbete-vatrum-uppvik.jpg", title: "Våtrumsmatta på golv och vägg", text: "Uppvik längs väggarna." },
  { image: "/images/arbete-linoleum-morkt.jpg", title: "Linoleum under läggning" },
  { image: "/images/arbete-textilplattor.jpg", title: "Textilplattor", text: "Textilplattor läggs i kontorsrum." },
  { image: "/images/arbete-vatrum-golv.jpg", title: "Våtrumsmatta, svetsning", text: "Golvet läggs och skarvarna svetsas." },
  { image: "/images/arbete-underlag-rum.jpg", title: "Underlag före avjämning" },
  { image: "/images/arbete-avjamning-pagar.jpg", title: "Avjämning pågår", text: "Underlaget görs plant innan golvet läggs." },
  { image: "/images/arbete-underlag-efter-rivning.jpg", title: "Underlag efter rivning" },
  { image: "/images/arbete-avjamnat-rum.jpg", title: "Avjämnat underlag", text: "Plan yta, redo för nytt golv." },
  { image: "/images/arbete-underlagsberedning.jpg", title: "Underlagsberedning", text: "Gamla limrester och tapet tas bort." },
  { image: "/images/arbete-golv-laggning.jpg", title: "Golv under läggning" },
  { image: "/images/arbete-grundering.jpg", title: "Grundering av underlag", text: "Underlaget grunderas före ny golvbeläggning." },
  { image: "/images/arbete-avjamning.jpg", title: "Avjämning", text: "Plan yta i korridor innan golvet läggs." },
  { image: "/images/forskola.jpg" },
  { image: "/images/golvprojekt.jpg" },
  { image: "/images/lsshem.jpg" },
  { image: "/images/snickeri0.jpg" },
  { image: "/images/vatrum.jpg" },
  { image: "/images/snickeri1.jpg" },
];
