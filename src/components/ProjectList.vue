<template>
  <ul class="project-list">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </ul>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: projects.sort((a, b) => a.id - b.id),
    };
  },
};
</script>

<style scoped>
.project-list {
  list-style-type: none;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
