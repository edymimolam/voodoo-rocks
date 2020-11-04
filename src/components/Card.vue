<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-primary">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.body }}
      </p>
      <p class="text-muted">Author</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<style lang="scss" scoped>
  /* .card {
    margin-bottom: 0.75rem;
    @include media-breakpoint-up(sm) {
      width: 15rem;
    }
  } */
</style>
