// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://skandaganesh.github.io/",  
  base: "/",                                 // correct for user site
  output: "static",                          // required for GitHub Pages
  vite: { plugins: [tailwindcss()] },
  integrations: [
    mdx({ syntaxHighlight: "prism" }),
    markdoc(),
    react(),
    icon({
      include: {
        mdi: ["*"],
        "simple-icons": ["*"],
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: "dracula", wrap: true },
  },
});
