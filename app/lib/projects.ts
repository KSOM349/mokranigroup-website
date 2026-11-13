// Lägg till eller ta bort en rad för att ändra bilderna på sidan.
// Valfritt: lägg till title och text för en bild, till exempel
// { image: "/images/golv1.jpg", title: "Parkett i hall", text: "Kort beskrivning" }
export type Project = { image: string; title?: string; text?: string };

export const projects: Project[] = [
  { image: "/images/forskola.jpg" },
  { image: "/images/golvprojekt.jpg" },
  { image: "/images/lsshem.jpg" },
  { image: "/images/renovering.jpg" },
  { image: "/images/snickeri0.jpg" },
  { image: "/images/vatrum.jpg" },
  { image: "/images/snickeri1.jpg" },
];
