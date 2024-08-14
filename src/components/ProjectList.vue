<template>
  <ul class="project-list">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </ul>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>

<style scoped>
.project-list {
  list-style-type: none;
  padding: 20;
  margin: 20;
}
</style>
