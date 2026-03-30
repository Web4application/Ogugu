# Game Activity

Play mini-games or interactive challenges in a Discord voice or text channel.

## Requirements
- Bot with message permissions.
- Optional: voice channel for live interactions.

## Setup
1. Create a `/startgame` command.
2. Use buttons or select menus to manage gameplay.
3. Track scores and optionally maintain a leaderboard.

---

### **3. `activities/music-activity.md`**

```md
# Music Activity

Stream or queue music for server members in voice channels.

## Requirements
- Bot with `CONNECT` and `SPEAK` permissions.
- Node.js environment with `@discordjs/voice`.

## Example Snippet
```js
const connection = joinVoiceChannel({
    channelId: 'VOICE_CHANNEL_ID',
    guildId: 'GUILD_ID',
    adapterCreator: guild.voiceAdapterCreator,
});

const resource = createAudioResource('song.mp3');
const player = createAudioPlayer();
player.play(resource);
connection.subscribe(player);
```
## Example Snippet
```js
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'startgame') {
    await interaction.reply('Game started! Click a button to play.');
  }
});
