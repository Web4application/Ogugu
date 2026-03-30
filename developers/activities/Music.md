
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
