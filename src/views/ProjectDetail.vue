<template>
  <ProjectDetail :project="project" />
</template>

<script>
import ProjectDetail from "../components/ProjectDetail.vue";
import projects from "../data/projects";

export default {
  components: { ProjectDetail },
  data() {
    return {
      project: {},
    };
  },
  created() {
    const projectId = Number(this.$route.params.id);
    const allProjects = Object.values(projects).flat();
    this.project = allProjects.find((p) => p.id === projectId) || {};
  },
};
</script>
