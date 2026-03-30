import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/invite/:slug", (req, res) => {
  const { slug } = req.params;

  // Fake database for now
  const inviteData = {
    web4: {
      serverName: "web4",
      description: "Web4 app The chatting platform",
      inviteUrl: "https://discord.com/invite/qzKvJpweA4",
      memberCount: 90,
      iconUrl: "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    qubuhub: {
      serverName: "QUBUHUB",
      description: "AI + Web3 + builders community",
      inviteUrl: "https://discord.com/invite/yourcode",
      memberCount: 210,
      iconUrl: "https://cdn.discordapp.com/embed/avatars/1.png"
    }
  };

  const server = inviteData[slug];

  if (!server) {
    return res.status(404).send("Invite not found");
  }

  res.render("invite", server);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
