import type { MetadataRoute } from "next";

const base = "https://www.mokranigroup.com";
const paths = ["", "/golv", "/bygg", "/it", "/stadning", "/projekt", "/om-oss", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
