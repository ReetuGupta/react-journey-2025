# Day 4: JSX Advanced & Rendering Techniques
<br/>

## 🧩 Part 1: JSX (Curly Braces + Real-World Uses)

### 1. JSX with Curly Braces ({})

You can embed JavaScript expressions directly inside JSX using {}.

```bash
const name = 'Jonny';
const greeting = <h1>Hello, {name}!</h1>;
```

🔹✅ Anything inside {} is evaluated as JS.

🔹❌ Statements (like if) are not allowed, only expressions.

🔹Can be used for: variables, ternary operators, expressions, function calls.

### 2. Uses of JSX

#### a. Embedding Expressions

```bash
const age = 25;
const message = <p>I am {age} years old.</p>;
```

#### b. Using Attributes

HTML-like but uses camelCase:

```bash
const element = <img src="img.png" alt="Logo" className="logo" />;
```

Examples:

🔸class → className

🔸for → htmlFor

🔸style → passed as an object

#### c. Passing Children via Props

```bash
const Welcome = (props) => <div>{props.children}</div>;

const App = () => (
  <Welcome>
    <h1>Hello</h1>
    <p>Welcome to React.</p>
  </Welcome>
);
```

🔸{props.children} lets the component render nested content.

🔸Increases reusability and flexibility.

#### d. JSX is Syntactic Sugar (Compiles to React.createElement)

```bash
const btn = <button className="btn" onClick={() => alert("Clicked!")}>Click Me</button>;
```

Compiles to:

```bash
React.createElement("button", {
  className: "btn",
  onClick: () => alert("Clicked!")
}, "Click Me");
```
<br/>

## ⚛️ Part 2: Rendering Techniques

React renders elements in multiple ways depending on the situation:

### 1. Conditional Rendering

```bash
const isLoggedIn = true;
return (
  <div>
    {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
  </div>
);
```

You can use:

🔸Ternary (? :)

🔸Logical &&

🔸IIFE functions (rarely)

### 2. Rendering from Functions

```bash
function getUserGreeting(name) {
  return <h2>Hello, {name}</h2>;
}

const App = () => getUserGreeting("Reetu");
```

### 3. Rendering Elements in Variables

```bash
const content = <p>This is content from a variable.</p>;

return <div>{content}</div>;
```
<br/>

## 📝 Summary

***Read about advanced JSX like JSX in curly braces and other uses and another topic rendering elements in multiple ways.***