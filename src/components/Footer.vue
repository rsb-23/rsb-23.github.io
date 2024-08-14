<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Fun Projects. All rights reserved.</p>
      <ul class="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
