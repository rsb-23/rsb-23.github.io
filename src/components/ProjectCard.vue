<template>
  <li class="project-card" @click="redirectToRepo">
    <img :src="getImage()" @error="handleImageError" alt="Project Image" class="project-image" />
    <div class="project-details">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    getImage() {
      let imageName = this.project.image;
      if (imageName == "" || imageName == undefined) {
        imageName = `${this.project.ghRepo}.png`;
      }
      if (imageName.startsWith("http")) {
        return imageName;
      }
      try {
        return require(`@/assets/icons/${imageName}`);
      } catch (error) {
        return require("@/assets/icons/repo.svg");
      }
    },

    handleImageError(event) {
      event.target.src = require("@/assets/icons/repo.svg");
    },
    redirectToRepo() {
      const url = this.project.url;
      window.open(url, "_blank", "noopener,noreferrer");
    },
  },
};
</script>

<style scoped>
.project-card {
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0px 5px;
  margin-bottom: 1rem;
  padding: 1rem;
  color: var(--text-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image {
  width: clamp(60px, 8vw, 90px);
  height: clamp(60px, 8vw, 90px);
  object-fit: cover;
  margin-right: 1rem;
}

.project-card h3 {
  font-size: 1.25rem;
  color: var(--secondary-color);
  margin: 0 0 10px;
}

.project-details {
  flex: 1;
}
.project-details p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0 0;
  color: var(--text-color);
}
</style>
