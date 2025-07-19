# Day 3 – Import & Export, JSX, Components in React
<br/>

## Import & Export in React

React applications are made up of components — and to keep things modular and maintainable, we use import and export to move code across files.

### 🛠 Types of Export:

**Default Export**

🔹Only one per file\
🔹Commonly used in React components

```bash
//Day3.jsx

export default function MyComponent(){
    return(
        <h1>
            This is Default Export & Import
        </h1>
    )
}
```

```bash
//App.jsx

import './App.css'
import MyComponent from './components/Day3'

function App() {
  return (
      <div>
        <MyComponent/>
      </div>
  );
}

export default App
```

**Named Export**

🔹Can export multiple things from a file\
🔹Useful for utility functions, constants etc.

```bash
//Day3.jsx

export function Header(){
    return (
        <h1>
            Header
        </h1>
    )
}

export function Footer(){
    return (
        <h1>
            Footer
        </h1>
    )
}
```

```bash
//App.jsx

import './App.css'
import {Header, Footer} from './components/Day3'

function App() {
  return (
      <div>
        <Header/>
        <h1>
          Main
        </h1>
        <Footer/>
      </div>
  );
}

export default App
```

***⚡ Pro Tip: React devs prefer default exports for components as each file usually contains only one component.***
<br/>

## 📘 JSX in React

### What is JSX?

JSX (JavaScript XML) is a syntax extension in React that allows you to write HTML-like code directly inside JavaScript. It makes creating UI components more intuitive and readable.

### Why JSX?

🔹Simplifies writing and visualizing UI elements\
🔹Enables embedding dynamic data using JavaScript expressions\
🔹Makes the code cleaner and closer to how the UI should appear\
🔹Internally transformed into React.createElement() calls by the React compiler\

### Key Rules of JSX:

🔹Must return a single parent element\
🔹Use className instead of class\
🔹Wrap JavaScript expressions inside {}\
🔹Close all tags, even self-closing ones like <img />, <br />\
🔹JSX is not HTML — it’s syntactic sugar over React.createElement() with its own rules\
<br/>

## ⚛️ React Components

### What Are Components?

Components are independent, reusable building blocks in a React application that return JSX to describe a part of the UI. They help break down the UI into smaller, manageable pieces.

### Types of Components

**1. Functional Components**\
These are plain JavaScript functions that return JSX. Most modern React apps use functional components.

```bash
// Day3.jsx
function Header() {
  return <h1>This is the Header</h1>;
}

export default Header;
```

**2. Class Components (Old Way)**\
These use ES6 classes and have lifecycle methods. They're now rarely used in new apps.

```bash
// Old way - not recommended now
class Header extends React.Component {
  render() {
    return <h1>This is the Header</h1>;
  }
}
```

### Why Use Components?

**🔁 Reusability –** Use the same component across different parts of your app.\
**🔧 Maintainability –** Smaller, focused components are easier to debug and manage.\
**🧩 Composability –** Combine small components to build complex UIs.\
**📦 Separation of Concerns –** Keeps logic and UI neatly organized.\

### Component Naming Conventions

🔹Use PascalCase for component names and file names: UserCard.jsx, NavBar.jsx\
🔹Keep the component and its styles (CSS/Tailwind) together for better organization.\

### Nesting Components

You can include one component inside another. This is called nesting.

```bash
// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my React app!</p>
      <Footer />
    </div>
  );
}

export default App;
```
<br/>

## 📝 Summary

***Learned about import and export, JSX, and React components along with examples.***

