# Polls & Votes Activity

Run live polls and votes to engage your server.

## Setup
- Commands: `/poll create`, `/poll vote`.
- Use buttons or select menus to record votes.
- Optional: display results dynamically.

```js
const poll = await interaction.reply({ content: 'Vote now!', components: createVoteButtons() });
