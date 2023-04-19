# 📣 **Summary**

❌⭕️ **This project aims to develop a Tic Tac Toe game using <code>React</code>!** ⭕️❌

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

### Architecture:

in src:

**components:**

  1. **Game** : include main functions and all the components inside
  1. **Board** : 3*3 grid includes Squares
  1. **Square** : can select those as X player or O player
  1. **Message** : announce the result of game : 1-Win 2-Draw 3-Next round
  1. **ScoreBoard** : keep scores of X player and O player in previous rounds
  1. **Buttons** : includes 2 button for 1-Restart the Game 2- Go to next rounds
  1. **WinnerLine** : draw the winner combination which can be vertical, horizontal or diagonal
  
  Note: This project is designed for *2-Player* mode , the *player vs computer* mode is coming soon.

**Styling:**

- Component-Level CSS in Next.js


### Deploy on Vercel

I used [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) to deploy my project. Check the live Demo on [Tic Tac Toe](https://tic-tac-toe-sepidev.vercel.app/).
