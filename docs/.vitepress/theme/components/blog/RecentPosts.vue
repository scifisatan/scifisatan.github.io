<script setup lang="ts">
import usePosts from '../../composables/usePosts'
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const { allPosts: posts } = usePosts()

const recentPosts = computed(() => {
  return posts.value
    .sort((a, b) => new Date(b.date.string).getTime() - new Date(a.date.string).getTime())
    .slice(0, 3)
})


const markdownContent = computed(() => {
  return recentPosts.value
    .map(post => `- [${post.title}](/blog${post.href})`)
    .join('\n')
})

const htmlContent = computed(() => {
  return md.render(markdownContent.value)
})
</script>

<template>
  <div class="container">
    <div class="posts-container" v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style>