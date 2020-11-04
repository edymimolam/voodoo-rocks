<template>
  <nav class="navbar navbar-light search-container">
    <form class="form-inline  search">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  </nav>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .search-container {
    padding: 1.5rem 0;
    margin: 0 auto;
    @include media-breakpoint-up(md) {
      max-width: 32%;
    }
  }
  .search {
    margin: 0 auto;
    width: 100%;
  }
  .form-inline .input-group {
    width: 100%;
  }
</style>
