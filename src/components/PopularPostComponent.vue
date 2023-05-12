<template>
    <div class="popular-posts">
      <h1 class="title">PopularPostComponent</h1>
      <div class="popular-posts-grid">
        <div v-for="post in posts" :key="post.id" class="card">
          <img :src="post.photoUrl" :alt="post.title" />
          <h2>{{ post.title }}</h2>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import postService from '../services/postService';
  
  export default {
    name: "PopularPostComponent",
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      this.getTopPosts();
    },
    methods: {
      getTopPosts() {
        postService
          .getPopularPosts()
          .then((response) => {
            this.posts = response;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
.popular-posts h1 {
  text-align: center;
}

.popular-posts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.popular-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.popular-posts-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
</style>