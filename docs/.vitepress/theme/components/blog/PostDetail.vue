<script setup lang="ts">
import usePosts from '../../composables/usePosts'
import MarkdownIt from 'markdown-it'

const { currentPost: post } = usePosts()


</script>

<template>
  <div>
   
   <a href="javascript:history.back()" class="go-back-link">
      ← Go back
    </a>
     
    <h1 class="post-title">
      {{ post.title }}
    </h1>
    <p>
      <time :datetime="post.date.string" class="post-date">
        {{ new Date(post.date.string).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }) }}
      </time>
    </p>

    <slot/>

    <!-- Add Giscus component here -->
    <Giscus
      repo="scifisatan/scifisatan.github.io"
      repo-id="R_kgDOJiWKcw"
      category="General"
      category-id="DIC_kwDOJiWKc84CkUL2"
      mapping="pathname"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="preferred_color_scheme"
      lang="en"
    />
  </div>
</template>

<style scoped>
/* Add styles for the go back link */
.go-back-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 2rem;
  display: block;
}

.post-title {
  color: var(--vp-c-brand);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-secondary);
  font-weight: 600;
  display: block;
  margin-bottom: 2rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }

  .go-back-link {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 1.75rem;
  }

  .post-date {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
}
</style>
