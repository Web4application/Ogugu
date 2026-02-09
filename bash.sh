npx degit web4application/project#main my-awesome-project
cd my-awesome-project

npm install
npm run dev

cd embedded-app-sdk-examples/sdk-playground-packages/client
pnpm link ~/path/to/embedded-app-sdk # this is an example path
cd embedded-app-sdk-examples/sdk-playground
pnpm dev
npm install @discord/embedded-app-sdk
npm i xyber-ai-chat
