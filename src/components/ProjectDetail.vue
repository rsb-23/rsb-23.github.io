<template>
  <div class="project-detail">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="Project Image" />
    <p>
      Play the game: <a :href="project.gameUrl">{{ project.gameName }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
.project-detail {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.project-detail img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>
