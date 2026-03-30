
---

### **4. `activities/watch-together.md`**
```md
# Watch Together Activity

Watch videos or stream content collaboratively in a voice channel.

## Setup
1. Use Discord’s Activity API or bot to launch a session.
2. Provide an invite link to participants.

```js
const invite = await channel.createInvite({ maxAge: 300 });
console.log(`Join the activity: ${invite.url}`);
