<template>
  <div class="project-sections">
    <section v-for="(items, category) in projects" :key="category" class="project-section">
      <h2 class="section-title">{{ category }}</h2>
      <ul class="project-list">
        <ProjectCard v-for="project in items" :key="project.id" :project="project" />
      </ul>
    </section>
  </div>
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
.project-sections {
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
}

.project-section {
  padding: 10px;
}
.section-title {
  text-transform: capitalize;
  margin: 0 10px 10px;
  color: var(--secondary-color);
  font-size: 1.4rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 6px;
}
.project-list {
  list-style-type: none;
  padding: 10px;
  /* margin: 10px; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 5px 20px;
  background-color: var(--card-bg-color);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.project-list li {
  /* background-color: var(--card-bg-color); */
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-list li:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .project-list {
    grid-template-columns: 1fr;
  }
}
</style>
