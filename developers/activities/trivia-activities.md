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
