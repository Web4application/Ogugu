# Trivia / Quiz Activity

Engage your server members with fun quizzes.

## Requirements
- Bot with permissions to send messages and interact with slash commands.
- Trivia questions database or API.

## Setup
1. Create a `/trivia` command in your bot.
2. Fetch a random question from your source.
3. Allow users to answer via buttons or select menus.
4. Track points and optionally create a leaderboard.

## Example Snippet
```js
// Simple trivia command structure
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trivia') {
    const question = getRandomQuestion();
    await interaction.reply({ content: question.text, components: createAnswerButtons(question) });
  }
});

```

---

### **6. `activities/trivia-activity.md`**
```md
# Trivia / Quiz Activity

Engage server members with quizzes and competitions.

## Setup
1. Add a `/trivia` command.
2. Fetch questions from a database or API.
3. Users answer via buttons or select menus.
4. Track points and maintain a leaderboard.

```js
const question = getRandomQuestion();
await interaction.reply({ content: question.text, components: createAnswerButtons(question) });
```
#### `activities/watch-together.md`
``
# Watch Together Activity

Let your users watch videos in a voice channel simultaneously.

## Requirements
- Bot with `applications.commands` scope.
- Access to a voice channel.

## Steps
1. Launch the activity with the Discord Activity API.
2. Provide an invite link to users.
3. Users click join and start watching together.

```js
const invite = await channel.createInvite({ maxAge: 300 });
console.log(`Join the activity: ${invite.url}`);
