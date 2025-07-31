<script setup>

</script>

<template>
  <div>
    <h1>Vue3 mini projects</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/counter">Counter</RouterLink> |
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div> 

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
