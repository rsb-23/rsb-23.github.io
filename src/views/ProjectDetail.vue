<template>
  <div>
    <Header />
    <ProjectDetail :project="project" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ProjectDetail from "../components/ProjectDetail.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, ProjectDetail, Footer },
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
