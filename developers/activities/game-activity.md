# Game Activity

Play mini-games or interactive challenges in a Discord voice or text channel.

## Requirements
- Bot with message permissions.
- Optional: voice channel for live interactions.

## Setup
1. Create a `/startgame` command.
2. Use buttons or select menus to manage gameplay.
3. Track scores and optionally maintain a leaderboard.

## Example Snippet
```js
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'startgame') {
    await interaction.reply('Game started! Click a button to play.');
  }
});
