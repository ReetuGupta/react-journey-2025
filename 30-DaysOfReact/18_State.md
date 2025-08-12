# Day 18: React State – Deep Dive
<br/>

Today I explored **React State** in more detail — its types, importance, how it flows through components, and how it differs from props.

## 🎯 What is State?
- State is data that a component can hold over time and update as needed.
- When state changes, React re-renders the component to reflect the new data.

## 🎯 Types of State in React
1. **Local State**  
   Managed within a single component using hooks like `useState`.

2. **Global State**  
   Shared across multiple components, often managed with Context API or state management libraries (Redux, Zustand, etc.).

3. **Server State**  
   Data fetched from APIs, requiring synchronization with the UI.

4. **URL State**  
   Data present in the URL such as query parameters or path variables.

## 🎯 Why State is Important
- Makes UI **dynamic** and **interactive**.
- Keeps the component updated with user input and server data.
- Helps control how the component behaves at any given time.

## 🎯 State Flow in React
- State is **owned** by the component where it’s declared.
- It can be **passed down** to child components as props.
- Changes to state trigger re-renders of the component.

## 🎯 Props vs State
| Props | State |
|-------|-------|
| Read-only | Mutable |
| Passed from parent to child | Managed within the component |
| Cannot be changed by receiving component | Can be updated using state updater functions |
| Makes components reusable | Controls how the component renders |

## 🎯 Managing State Effectively
- Keep state as minimal as possible.
- Lift state up to the nearest common ancestor if multiple components need it.
- For large-scale apps, use dedicated state management tools.

```jsx
import { useState } from "react";

function Example() {
  const [name, setName] = useState("Reetu");

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setName("React Learner")}>
        Change Name
      </button>
    </div>
  );
}
```
<br/>

# ⚡ Summary
🔥 Today I explored:
- Different types of state in React
- Why state matters for interactive UIs
- How state flows through components
- Key differences between props and state
- Best practices for managing state effectively
