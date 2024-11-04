import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import Posts from './components/blog/Posts.vue'
import Post from './components/blog/Post.vue'
import PostDetail from './components/blog/PostDetail.vue'
import RecentPosts from './components/blog/RecentPosts.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('RecentPosts', RecentPosts)
  },
}
