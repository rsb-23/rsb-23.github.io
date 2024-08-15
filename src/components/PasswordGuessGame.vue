<template>
  <div class="password-guess-game" v-if="story">
    <h2>Forgotten Password</h2>
    <h3>{{ story.name }}</h3>
    <div v-if="!gameOver">
      <p class="prompt">
        {{ story.prompts[currentLevel] }}
      </p>
      <input
        v-model="userInput"
        placeholder="type here ..."
        @keyup.enter="checkPassword"
      />
    </div>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
    </div>
    <p v-if="message && !gameOver">{{ message }}</p>
    <p v-if="message && gameOver" :style="{ textAlign: story.msgAlign }">
      {{ message }}
    </p>
    <button v-if="gameOver" @click="resetStory">Play Again</button>
  </div>
</template>

<script>
export default {
  props: {
    story: Object,
  },
  data() {
    return {
      userInput: "",
      currentLevel: 0,
      progress: 0,
      message: "",
      gameOver: false,
    };
  },
  methods: {
    checkPassword() {
      let n = this.story.passwords.length;
      if (this.userInput === this.story.passwords[this.currentLevel]) {
        this.message = "👍🏼";
        this.currentLevel++;
        this.progress = (this.currentLevel / n) * 100;
        this.userInput = "";

        if (this.currentLevel === n) {
          this.message = this.story.successMsg;
          this.gameOver = true;
        }
      } else {
        this.message = "👎🏼";
        this.userInput = "";
      }
    },
    resetStory() {
      this.userInput = "";
      this.currentLevel = 0;
      this.progress = 0;
      this.message = "";
      this.gameOver = false;
      this.$emit("resetGame");
    },
  },
};
</script>

<style scoped>
.password-guess-game {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 15px;
  background-color: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.5s ease;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

p {
  margin-top: 10px;
  font-size: 18px;
  white-space: pre-line;
}
.prompt {
  text-align: left;
}
</style>
