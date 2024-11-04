<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../../composables/posts.data'

const props = defineProps<{
  post: Post
}>()

const { site } = useData()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<template>
  <a :href="`${site.base}blog${post.href}`" class="post-link">
    <article class="post-article">
      <!-- Title -->
      <p class="post-title">
        {{ post.title }}
      </p>

      <!-- Date -->
      <time :datetime="post.date.string" class="post-date">
        {{ formatDate(post.date.string) }}
      </time>
    </article>
  </a>
</template>

<style scoped>
  .post-link {
    display: block;
    transition: colors 0.3s;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .post-link:hover {
    background-color: rgba(229, 231, 235, 0.5);
    /* hover:bg-gray-100/50 */
  }

  .dark .post-link:hover {
    background-color: rgba(55, 65, 81, 0.5);
    /* dark:hover:bg-gray-700/50 */
  }

  .post-article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .post-title {
    font-size: 1.875rem;
    /* text-3xl */
    font-weight: 500;
    /* font-medium */
    letter-spacing: -0.025em;
    /* tracking-tight */
    color: #1f2937;
    /* text-gray-900 */
    transition: colors 0.3s;
  }

  .dark .post-title {
    color: #f3f4f6;
    /* dark:text-gray-100 */
  }

  .post-date {
    font-size: 0.875rem;
    /* text-sm */
    font-variant-numeric: tabular-nums;
    /* tabular-nums */
    color: #6b7280;
    /* text-gray-500 */
    flex-shrink: 0;
  }

  .dark .post-date {
    color: #9ca3af;
    /* dark:text-gray-400 */
  }

  /* Optional: Add a subtle line between posts in the parent component */
  .blog-list>a:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
  }
</style>