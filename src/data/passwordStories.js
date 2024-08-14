// data/passwordSets.js
export const passwordStories = {
  test: {
    name: "test",
    passwords: ["qwe"],
    prompts: ["Enter qwe"],
    successMsg: "test success",
  },
  beginner: {
    name: "No Brainer",
    passwords: ["password", "incorrect", "again", "again later"],
    prompts: [
      "Enter password",
      "Password is incorrect",
      "Try again",
      "Please try again later",
    ],
    successMsg: "🎉🎉 Hurray 🎉🎉",
  },
  advanced: {
    name: "The Office | TV series",
    passwords: ["password", "00000000", "00000001", "big boobs", "big boobz"],
    prompts: [
      "Uh, it's saying the server went down. \n Does anybody know that password, cause otherwise, we can't do any work? \n Uh, try _____",
      "Hint: Nope.\n Try _____",
      "Hint: Okay. Now try _____",
      "You know what? \n It made me laugh when I heard it, but Pam got really offended.\n _____",
      "Try '*** ***** with a _'",
    ],
    successMsg:
      "That's...the password. We're in. \n Alright, Wow. \n Yes \n The important thing is this kept us secure, people.",
  },
};
