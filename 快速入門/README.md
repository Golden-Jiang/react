# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Create React CDN Project
    step 01: 用系統管理員身份開啟 cmd
    step 02: 進入工作目錄 (名稱可自訂隨意, 例如 D:\project\react 表示用 react 開發的專案都建立在此目錄下)
    step 03: 建立 project\react\react-cdn
    step 04: 以 VSCode 打開 react-cdn 目錄
    step 06: 新增 react-cdn-001.html
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/babel-standalone/6.26.0/babel.min.js" ></script>
    step 07: 新增 react-cdn-001.html

# Create Old React Project
    step 01: 用系統管理員身份開啟 cmd
    step 02: 進入工作目錄 (名稱可自訂隨意, 例如 D:\project\react 表示用 react 開發的專案都建立在此目錄下)
    step 03: D:\project\react> npm i -g create-react-app 
             D:\project\react> create-react-app react-app-001
             專案建立中 ...
    step 04: 進入專案目錄, 例如 cd react-app-001
             安裝 npm 依賴 modules
             npm install
             執行 npm start
    step 05: 安裝 scss
             npm i sass
    step 06: 安裝 icons
             npm i react-icons

# Create React Project
    step 01: 用系統管理員身份開啟 cmd
    step 02: 進入工作目錄 (名稱可自訂隨意, 例如 D:\project\react 表示用 react 開發的專案都建立在此目錄下)
    step 03: D:\project\react> 輸入 npm init vite@latest
             [Project Name] 輸入 react-project ( react-project 是專案名稱, 自訂)
             [Select a framework] 選擇 react
             [Select a variant] 選擇 Javascript
             專案建立中 ...
    step 04: 進入專案目錄, 例如 cd react-project
             安裝 npm 依賴 modules
             npm install
             執行 npm run dev
    step 05: 安裝 scss
             npm i sass
    step 06: 安裝 icons
             npm i react-icons

# Create React Next.js Project
    step 01: 用系統管理員身份開啟 cmd
    step 02: 進入工作目錄 (名稱可自訂隨意, 例如 D:\project\react 表示用 react 開發的專案都建立在此目錄下)
    step 03: D:\project\react> 輸入 npx create-next-app@latest
             [Project Name] 輸入 react-project ( react-project 是專案名稱, 自訂)
             ...
             專案建立中 ...
    step 04: 進入專案目錄, 例如 cd react-project
             安裝 npm 依賴 modules
             npm install
             執行 npm run dev
    step 05: 安裝 scss
             npm i sass
    step 06: 安裝 icons
             npm i react-icons
