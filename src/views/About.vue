<template>
  <div class="about-page">
    <h1>About</h1>
    <p>
      This site showcases a collection of fun projects, tools, and experiments built by
      <a href="https://github.com/rsb-23" target="_blank" rel="noopener noreferrer">rsb-23</a>.
    </p>
    <p>
      From CLI toolkits and Python packages to browser-based games and documentation projects,
      this is a space to explore, tinker, and share things built for fun and learning.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-page {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  color: var(--text-color);
}

.about-page h1 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.about-page p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-page a {
  color: var(--secondary-color);
}
</style>
