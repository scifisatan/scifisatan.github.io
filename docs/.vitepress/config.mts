import { defineConfig } from "vitepress";
import { generateKnowledgeSidebar } from "./generateSidebar";

export default defineConfig({
  base: "/",
  title: "Abi Shrestha",
  description: "Portfolio Website of Abi Shrestha",
  head: [
    ["link", { rel: "icon", href: "/icon.png",},],
    // ["link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap' }]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/index" },
      { text: "Knowledge", link: "/knowledge/index" },
    ],

    sidebar: {
      "/knowledge/": generateKnowledgeSidebar(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/scifisatan" },
      { icon: "x", link: "https://x.com/39abii_" },
      { icon: "linkedin", link: "https://linkedin.com/in/39abii" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Enjoy your stay here <3",
    },
   
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
});
