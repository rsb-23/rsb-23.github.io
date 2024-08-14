<template>
  <div class="story-selection">
    <h2>Select a Story</h2>
    <ul>
      <li v-for="(story, key) in passwordStories" :key="key">
        <button @click="selectStory(key)">{{ story.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { passwordStories } from "@/data/passwordStories";

export default {
  data() {
    return {
      passwordStories,
    };
  },
  methods: {
    selectStory(storyName) {
      this.$emit("storySelected", storyName);
    },
  },
};
</script>

<style scoped>
.story-selection {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
