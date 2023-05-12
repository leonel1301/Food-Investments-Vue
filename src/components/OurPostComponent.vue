<template>
    <div class="our-posts">
      <h1 class="title">OurPostsComponent</h1>
      <div class="our-posts-grid">
        <div v-for="post in posts" :key="post.id" class="card">
          <h2>{{ post.title }}</h2>
          <router-link :to="'/post/' + post.id">
            <Button>See More</Button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import postService from '../services/postService';

    export default {
        name: "OurPostComponent",
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.getRestPosts()
        },
        methods: {
            getRestPosts() {
                postService.getRestPosts()
                .then((res) => {
                    this.posts = res
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
.our-posts h1 {
  text-align: center;
}

.our-posts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.our-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.our-posts-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
</style>