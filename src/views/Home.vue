<template>
  <div>
    <Header />
    <ProjectList />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ProjectList from "../components/ProjectList.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, ProjectList, Footer },
};
</script>
