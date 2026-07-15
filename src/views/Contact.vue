<template>
  <div class="contact-page">
    <h1>Contact</h1>
    <p>Feel free to reach out through any of the following channels:</p>
    <ul class="contact-links">
      <li>
        GitHub :
        <a href="https://github.com/rsb-23" target="_blank" rel="noopener noreferrer">github.com/rsb-23</a>
      </li>
      <li>
        LinkedIn :
        <a href="https://www.linkedin.com/in/rsb-23/" target="_blank" rel="noopener noreferrer"
          >linkedin.com/in/rsb-23</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-page {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  color: var(--text-color);
}

.contact-page h1 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-links a {
  color: var(--secondary-color);
  text-decoration: none;
}

.contact-links a:hover {
  text-decoration: underline;
}
</style>
