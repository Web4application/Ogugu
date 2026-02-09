npm install
npm run dev
npx degit web4application/ogugu#main my-awesome-project
cd ogugu
cd embedded-app-sdk-examples/sdk-playground-packages/client
pnpm link ~/path/to/embedded-app-sdk # this is an example path
cd embedded-app-sdk-examples/sdk-playground
pnpm dev
npm install @discord/embedded-app-sdk
npm i xyber-ai-chat
npm install
npm run dev
git clone https://github.com/f5devcentral/vscode-f5.git
cd vscode-f5-fast/
npm install
code .
gh repo clone discord/embedded-app-sdk-examples
git clone https://github.com/openclaw/openclaw.git
cd openclaw

pnpm install
pnpm ui:build # auto-installs UI deps on first run
pnpm build

pnpm openclaw onboard --install-daemon

# Dev loop (auto-reload on TS changes)
pnpm gateway:watch
openclaw onboard --install-daemon

openclaw gateway --port 8080 --verbose

# Send a message
openclaw message send --to +2348132736003 --message "Hello from OpenClaw"

# Talk to the assistant (optionally deliver back to any connected channel: WhatsApp/Telegram/Slack/Discord/Google Chat/Signal/iMessage/BlueBubbles/Microsoft Teams/Matrix/Zalo/Zalo Personal/WebChat)
openclaw agent --message "Ship checklist" --thinking high

npm install -g openclaw@latest
# or: pnpm add -g openclaw@latest

openclaw onboard --install-daemon
