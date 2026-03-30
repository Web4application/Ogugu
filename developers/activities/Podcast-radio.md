# Podcast / Radio Activity

Host live podcasts, radio shows, or music streams in a Discord voice channel.

## Requirements
- Bot with `CONNECT` and `SPEAK` permissions in a voice channel.
- Access to audio sources (MP3 files, streams, or APIs).
- Node.js environment with `discord.js` v14+.
# Podcast / Radio Activity

Host live audio streams, podcasts, or radio shows.

## Requirements
- Bot with `CONNECT` and `SPEAK` permissions.
- Node.js with `@discordjs/voice`.

## Setup
```js
const connection = joinVoiceChannel({
    channelId: 'VOICE_CHANNEL_ID',
    guildId: 'GUILD_ID',
    adapterCreator: guild.voiceAdapterCreator,
});

const player = createAudioPlayer();
const resource = createAudioResource('https://example.com/stream.mp3');
player.play(resource);
connection.subscribe(player);
```
## Setup
1. Connect your bot to a voice channel:
```js
const { joinVoiceChannel } = require('@discordjs/voice');
require('@discordjs/playpodcast');
require('@discordjs/startradio');
const connection = joinVoiceChannel({
    channelId: 'VOICE_CHANNEL_ID',
    guildId: 'GUILD_ID',
    adapterCreator: guild.voiceAdapterCreator,
});
const { createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const player = createAudioPlayer();
const resource = createAudioResource('https://example.com/stream.mp3');
player.play(resource);
connection.subscribe(player);
