<template>
  <li class="project-card" @click="redirectToRepo">
    <img
      :src="getImage(project.image)"
      alt="Project Image"
      class="project-image"
    />
    <div class="project-details">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    getImage(imageName) {
      return require(`@/assets/${imageName}`);
    },
    redirectToRepo() {
      const url = `https://rsb-23.github.io/${this.project.ghRepo}`;
      window.open(url, "_blank", "noopener,noreferrer");
    },
  },
};
</script>

<style scoped>
.project-card {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.project-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;
}

.project-details {
  flex: 1;
}

.project-details h2 {
  margin: 0;
  font-size: 1.2rem;
}

.project-details p {
  margin: 0.5rem 0 0;
  color: #666;
}
</style>
