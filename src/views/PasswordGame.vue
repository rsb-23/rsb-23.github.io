<template>
  <SelectPasswordStory v-if="!selectedStory" @storySelected="handleStorySelection" />
  <PasswordGuessGame v-if="selectedStory" :story="passwordStories[selectedStory]" @resetGame="handleGameReset" />
</template>

<script>
import SelectPasswordStory from "@/components/SelectPasswordStory";
import PasswordGuessGame from "@/components/PasswordGuessGame.vue";
import { passwordStories } from "@/data/passwordStories";

export default {
  components: { SelectPasswordStory, PasswordGuessGame },
  data() {
    return {
      selectedStory: null,
      passwordStories,
    };
  },
  methods: {
    handleStorySelection(storyName) {
      this.selectedStory = storyName;
    },
    handleGameReset() {
      this.selectedStory = null;
    },
  },
};
</script>
