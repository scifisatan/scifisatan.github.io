import { defineConfig } from 'vitepress'
import { generateKnowledgeSidebar } from './generateSidebar'
import { title } from 'process'

export default defineConfig({
  base: '/',
  title: "Abi Shrestha",
  description: 'Portfolio Website of Abi Shrestha',
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
  
})


