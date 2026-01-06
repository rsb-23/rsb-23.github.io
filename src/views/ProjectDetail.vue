<template>
  <ProjectDetail :project="project" />
</template>

<script>
import ProjectDetail from "../components/ProjectDetail.vue";

export default {
  components: { ProjectDetail },
  data() {
    return {
      project: {},
    };
  },
  // created() {
  //   const projectId = this.$route.params.id;
  //   fetch(`data/projects/${projectId}.json`)
  //     .then((response) => response.json())
  //     .then((data) => (this.project = data));
  // },
};
</script>
