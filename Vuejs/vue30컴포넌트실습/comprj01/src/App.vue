<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vue3104">vue3104</router-link> |
    <router-link to="/vue3403">vue3403</router-link> |
    <router-link to="/Vue34ex">Vue34ex</router-link> |
    <router-link to="/Vue3501">Vue3501</router-link> |
    <router-link to="/Vue3701">Vue3701</router-link> |
    <router-link to="/Vue4301">Vue4301</router-link> |
    <router-link to="/todo">todo</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
