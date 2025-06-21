npx degit user/project#main my-project
cd my-project

npm install
npm run dev

cd embedded-app-sdk-examples/sdk-playground-packages/client
pnpm link ~/path/to/embedded-app-sdk # this is an example path
cd embedded-app-sdk-examples/sdk-playground
pnpm dev
