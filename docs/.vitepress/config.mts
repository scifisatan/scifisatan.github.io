import { defineConfig } from "vitepress";
import { generateKnowledgeSidebar } from "./generateSidebar";
import { title } from "process";

export default defineConfig({
  base: "/",
  title: "AR Treasure Hunt",
  description: "The Biggest Treasure Hunt of Nepal",
  head: [
    ["link", { rel: "icon", href: "/icon.png",},],
    ["meta", { itemprop: "name", content: "Abi Shrestha" }],
    ["meta", { itemprop: "description", content: "Portfolio Website of Abi Shrestha" },],
    ["meta", { itemprop: "image", content: "/preview-portfolio.png" }],
    ["meta", { property: "og:url", content: "https://abishrestha.com.np/" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Abi Shresthat" }],
    ["meta", { property: "og:description", content: "Portfolio Website of Abi Shrestha" },],
    ["meta", { property: "og:image", content: "/preview-portfolio.png" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Abi Shrestha" }],
    ["meta", { name: "twitter:description", content: "Portfolio Website of Abi Shrestha", },],
    ["meta", { name: "twitter:image", content: "/preview-portfolio.png" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "CV", link: "/cv" },
      { text: "Blog", link: "/blog/index" },
      { text: "Knowledge", link: "/knowledge/index" },
    ],

    sidebar: {
      "/knowledge/": generateKnowledgeSidebar(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/scifisatan" },
      { icon: "x", link: "https://x.com/dotfkemup" },
      { icon: "linkedin", link: "https://linkedin.com/in/39abii" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Enjoy your stay <3",
    },
  },
});
