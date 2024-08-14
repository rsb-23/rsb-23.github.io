<template>
  <div>
    <Header />
    <main>
      <SelectPasswordStory
        v-if="!selectedStory"
        @storySelected="handleStorySelection"
      />
      <PasswordGuessGame
        v-if="selectedStory"
        :story="passwordStories[selectedStory]"
        @resetGame="handleGameReset"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SelectPasswordStory from "@/components/SelectPasswordStory";
import PasswordGuessGame from "@/components/PasswordGuessGame.vue";
import { passwordStories } from "@/data/passwordStories";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, SelectPasswordStory, PasswordGuessGame, Footer },
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
