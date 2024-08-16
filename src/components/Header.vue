<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/projects">Projects</router-link> -->
      <router-link to="/password-game">Forgotten Password Game</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: start;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}
</style>
