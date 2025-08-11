# Day 17: Introduction to useState & Understanding React Hooks
<br/> 
Today I explored one of the most fundamental concepts in React — 
state management using the `useState` hook. This is where React components start to become dynamic and interactive.

## 🎯 What are Hooks?
Hooks are special functions that let you use React features (like state and lifecycle methods) in functional components without writing a class.
- All hooks start with "use" (e.g., useState, useEffect).
- Must follow **Rules of Hooks:**
  1) Call them at the top level (not inside loops, conditions, or nested functions).
  2) Only call them from React functions (functional components or custom hooks).

## 🎯 useState Basics
The useState hook lets you declare a state variable and a function to update it.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
```

✅ Returns an array with two values – the current state and the updater function\
✅ Can store numbers, strings, arrays, objects, or booleans\
✅ Triggers a re-render whenever the state changes

## 🎯 My Practice Example

```jsx
import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(() => count + 1);
  };

  return (
    <div className="flex items-center h-screen justify-center font-semibold text-2xl gap-2 flex-col">
      <h1>{count}</h1>
      <button
        onClick={handleCount}
        className="cursor-pointer py-1 px-2 border border-cyan-300 rounded-sm"
      >
        Click to increase
      </button>
    </div>
  );
};
```

**⚠ Note:** Avoid using count++ in state updates. Always use the functional updater form setCount(prev => prev + 1) to ensure React works with the latest state.

## 🎯 Why useState is Important
- Allows components to store and update data over time
- Makes UIs interactive and dynamic
- Works seamlessly with event handlers

<br/>

# ⚡ Summary
🔥 Today I explored:
- What React Hooks are and their rules
- How useState works in functional components
- Updating state the right way
- Wrote a practical counter example in React

***React’s useState hook is the foundation of interactive components 🚀***