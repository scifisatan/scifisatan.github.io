<script setup lang="ts">
import usePosts from '../../composables/usePosts'
import { computed } from 'vue'

const { allPosts: posts } = usePosts()

// Group posts by year
const postsByYear = computed(() => {
  const grouped = new Map()
  
  posts.value.forEach(post => {
    const year = new Date(post.date.string).getFullYear()
    if (!grouped.has(year)) {
      grouped.set(year, [])
    }
    grouped.get(year).push(post)
  })
  
  // Convert to array and sort years in descending order
  return Array.from(grouped.entries())
    .sort(([yearA], [yearB]) => yearB - yearA)
})
</script>

<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <p class="title">Blogs</p>
    </div>

    <!-- Timeline Container -->
    <div class="timeline-container">
      <!-- Years and Posts -->
      <div class="years-container">
        <div 
          v-for="[year, yearPosts] in postsByYear" 
          :key="year"
          class="year-section"
        >
          <!-- Year Label -->
          <div class="year-label">
            <p class="year-text">{{ year }}</p>
          </div>

          <!-- Posts for the year -->
          <div class="posts-container">
            <Post 
              v-for="post in yearPosts" 
              :key="post.href" 
              :post="post" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .container {
    padding: 4rem 1.5rem;
  }
}

.header {
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .header {
    margin-bottom: 4rem;
  }
}

.title {
  margin-bottom: 1rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--vp-c-brand);
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

.timeline-container {
  max-width: 42rem;
  margin: 0 auto;
  position: relative;
}

.years-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.year-section {
  position: relative;
}

.year-label {
  display: flex;
  align-items: center;
}

.year-text {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.posts-container {
  margin-top: 1rem;
}
</style>