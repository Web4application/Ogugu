
---

### **5. `activities/study-focus.md`**
```md
# Study / Focus Activity

Collaborative focus sessions or Pomodoro timers to boost productivity.

## Setup
- Create `/startstudy` or `/focus` commands.
- Use timers and progress messages.
- Optional: integrate leaderboards for engagement.

```js
// Timer example
setTimeout(() => interaction.followUp('Session complete!'), 25 * 60 * 1000);
