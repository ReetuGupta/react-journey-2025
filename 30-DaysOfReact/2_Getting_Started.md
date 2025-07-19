# Day 2 – Getting Started with React + Folder Structure
<br/>

## 📘 Introduction to React

**What is React?**  
React is a JavaScript library developed by Facebook for building fast, interactive user interfaces. It helps developers build reusable UI components and manage the application's state efficiently.

**Why React?**  
- Component-based architecture  
- Virtual DOM for better performance  
- Reusable and maintainable code  
- Backed by a strong community and widely used in industry  
- Supports building both single-page and mobile apps (via React Native)
<br/>

## ⚙️ React Setup

I’m using **Vite** for React setup, as recommended on the official React documentation.

**Official Installation Link:**  
[https://react.dev/learn/start-a-new-react-project](https://react.dev/learn/start-a-new-react-project)

```bash
npm create vite@latest
# Select framework: React
# Select variant: JavaScript or TypeScript
cd react-learning
npm install
npm run dev
```
## 📁 React Folder Structure Overview

Here's the structure of the React project after Vite setup:

```bash
react-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Descriptions:

🔹node_modules/: Contains all the installed npm packages.

🔹public/: Static assets like favicon or images.

🔹src/: Main source folder for React components and styles.

🔹.gitignore: Files and folders Git should ignore.

🔹eslint.config.js: Linting configuration.

🔹index.html: Root HTML file.

🔹package.json: Project metadata and dependencies.

🔹vite.config.js: Vite-specific config.

## ✅ Creating First React Component

We’ll create a simple component Hello.jsx.

```bash
//Hello.jsx

export default function Hello(){
    return(
        <h1>
            Hello React 19!
        </h1>
    );
}

//App.jsx

import './App.css'
import Hello from './components/Hello'

function App() {

  return (
      <div>
        <Hello/>
        <h2>
          Finally This is React 19.1.0
        </h2>
      </div>
  );
}

export default App
```
<br/>

## 📝 Summary

***Learned basic introduction of React.js including project setup of React.js using Vite with what is the flow of files and how this npm run dev works and finally created first component (Hello.jsx) in react and imported it inside App.jsx.***


