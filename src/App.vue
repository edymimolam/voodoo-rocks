<template>
  <Header @search="inputValue => (searchQuery = inputValue)" />
  <div class="card-columns">
    <Card v-for="post of searchResults" :key="post.id" :post="post" />
  </div>
</template>

<script>
  import axios from "axios";
  import Header from "./components/Header";
  import Card from "./components/Card";
  export default {
    name: "App",
    data: function() {
      return {
        searchQuery: "",
        posts: [],
        isLoading: false,
      };
    },
    computed: {
      searchResults() {
        if (!this.searchQuery) return this.posts;
        return this.posts.filter(({ userName }) =>
          userName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    mounted() {
      const server = axios.create({
        baseURL: "http://jsonplaceholder.typicode.com/",
      });

      const init = async () => {
        try {
          this.isLoading = true;

          const users = (await server.get("/users")).data;
          const posts = (await server.get("./posts")).data;

          const postsWithUserNames = posts.map(post => {
            const { name } = users.find(({ id }) => id === post.userId);
            return { ...post, userName: name };
          });

          this.posts = postsWithUserNames;
        } catch (err) {
          console.error(err);
        } finally {
          this.isLoading = false;
        }
      };

      init();
    },
    components: { Header, Card },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $gray-100;
    padding: 0 1.5rem;
    min-height: 100vh;

    .card-columns {
      @include media-breakpoint-only(sm) {
        column-count: 2;
      }
    }
  }
</style>
