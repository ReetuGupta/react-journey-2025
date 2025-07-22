# Day 3 – Props in React
<br/>

Today I explored one of the core fundamentals of React — **Props** (short for properties). Props allow us to pass data from one component to another and make our components dynamic and reusable.

## 🚀 What are Props?

- Props are **read-only**.
- They are passed from **parent to child** component.
- Help in **reusing components** with different data.
- Props cannot be changed by the child component.

## 🧠 Syntax Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Reetu" />
      <Welcome name="Gupta" />
    </div>
  );
}
```
```jsx
Output:

Hello, Reetu!
Hello, Gupta!
```

## 🔁 Destructuring Props

Instead of writing props.name, we can destructure props for cleaner code.

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

## 🧱 Real-World Example: Reusable Card Component
```jsx
function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="React" description="A JavaScript library for building UIs." />
      <Card title="Props" description="Used to pass data to components." />
    </div>
  );
}
```

## 📦 Bonus: props.children
props.children lets you pass elements inside the opening and closing tags of a component.

```jsx
function Container({ children }) {
  return <div className="box">{children}</div>;
}

function App() {
  return (
    <Container>
      <h2>Welcome!</h2>
      <p>This content is passed as children.</p>
    </Container>
  );
}
```
<br/>

## ✅ Summary

- Props are passed from parent to child.
- They help make dynamic and reusable components.
- Use destructuring for clean code.
- props.children allows nesting JSX inside custom components.