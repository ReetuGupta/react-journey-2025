# Day 9: Styling in React.js
<br/> 

Today I explored different ways to style components in React. Styling in React can be done in multiple ways depending on project needs, maintainability, and team preferences.

## 🎯 1. Inline Styling
Inline styles are written as JavaScript objects using camelCase properties instead of kebab-case.

```jsx
function InlineStyled() {
  const style = {
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
    borderRadius: "8px"
  };

  return <h2 style={style}>Hello from Inline Styling</h2>;
}
```

✅ Good for quick styling, dynamic values\
❌ Not suitable for complex styles or hover effects

## 🎯 2. CSS Stylesheets (External or Imported)
Create a .css file and import it into the component file.

```jsx
//Button.css

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
```
```jsx
//Button.jsx

import './Button.css';

function Button() {
  return <button className="btn">Click Me</button>;
}
```

✅ Clean and readable\
✅ Good for global styling and reusability\
❌ Class name collisions possible (unless scoped)

## 🎯 3. CSS Modules
CSS Modules provide scoped styling to avoid global class conflicts.

```jsx
//Card.module.css

.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}
```
```jsx
//Card.jsx

import styles from './Card.module.css';

function Card() {
  return <div className={styles.container}>I'm a styled card</div>;
}
```

✅ Scoped and modular\
✅ Safe for large projects\
❌ Slightly more setup and syntax overhead

<br/>

# ⚡ Summary
***🚀 Today I explored 3 major ways to style React components:***
- Inline Styling
- External CSS Stylesheets
- CSS Modules

***Each approach has its use case. For small components, inline or external CSS works fine. For large projects, CSS Modules are a better option due to scoped styling.***