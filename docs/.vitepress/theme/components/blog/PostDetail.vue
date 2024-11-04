<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'

const { site } = useData()

const { currentPost:post,  prevPost, nextPost } = usePosts()
</script>

<template>
  <div>
    <div>
      <h3
        class="mb-8 mt-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
        {{ post.title }}
      </h3>
      <slot />
      <div class="flex justify-between items-center mt-2 text-gray-500">
        <a v-if="prevPost" :href="`${site.base}blog${prevPost.href}`"
          class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-dark)]">
          <div class="i-bx:arrow-back mr-2" />
          <span>Previous Post</span>
        </a>
        <div v-if="!prevPost" />
        <a v-if="nextPost" :href="`${site.base}blog${nextPost.href}`"
          class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-dark)]">
          <span>Next Post</span>
          <div class="i-bx:right-arrow-alt ml-2" />
        </a>
      </div>
    </div>
   
  </div>
</template>

<style scoped>
.vp-doc h1,
h2,
h3,
hr {
  margin: 12px 0 0 0;
}
</style>
