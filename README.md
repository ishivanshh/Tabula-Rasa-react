# React Basic

A basic **React** project starter. Use this repo to practice components, props, state, and hooks.

1. npx create-react-app
> node package executer...
2. npm create vite@latest

## Requirements

- **Node.js** (LTS recommended)
- **npm** (or **yarn/pnpm**)

## Setup

Install dependencies:

```bash
npm install
```

## Run (Development)

> Pick the command that matches your React setup.

- **Vite**:

```bash
npm run dev
```

- **Create React App (CRA)**:

```bash
npm start
```

Open the URL printed in the terminal (commonly `http://localhost:5173` for Vite or `http://localhost:3000` for CRA).

## Build (Production)

```bash
npm run build
```

Build output:

- **Vite**: `dist/`
- **CRA**: `build/`

## Project Structure (Typical)

```text
src/
  components/
  App.jsx (or App.tsx)
  main.jsx (Vite) / index.jsx (CRA)
public/
```

## Scripts

Check `package.json` for the exact scripts your setup provides. Common ones:

- `npm run dev` / `npm start`
- `npm run build`
- `npm test` (if configured)
- `npm run lint` (if configured)
