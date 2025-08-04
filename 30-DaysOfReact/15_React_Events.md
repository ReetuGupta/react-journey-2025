# Day 15: Handling Events in React.js
<br/>
Today I explored how events work in React and how they're slightly different from traditional JavaScript events.

## 🎯 What are React Events?
React uses a **SyntheticEvent** wrapper around the browser's native event. This system works identically across all browsers.


## 🎯 Event Handling in React
React handles events similarly to DOM events but uses a camelCase naming convention and JSX syntax.

```jsx
function ClickButton() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
```

✅ Inline or separate event handlers\
✅ No need to use .addEventListener()\
✅ Event object is automatically passed to handlers

## 🎯 Common React Events
- onClick
- onChange
- onSubmit
- onMouseEnter
- onKeyDown

These work similarly to their native JS counterparts, but in JSX.

## 🎯 Passing Parameters to Event Handlers
We can pass arguments using arrow functions.

```jsx
function GreetButton() {
  function greet(name) {
    alert(`Hello, ${name}!`);
  }

  return <button onClick={() => greet("Reetu")}>Greet</button>;
}
```

✅ Avoid direct function call like onClick={greet("Reetu")} – this will run on render

## ⚠ Synthetic Events in React
React wraps native browser events with its own SyntheticEvent system for cross-browser compatibility.

```jsx
function LogEvent(e) {
  console.log(e); // SyntheticEvent
}
```

<br/>

# ⚡ Summary
🔥 Today I explored:
- React’s approach to event handling
- Common events used in forms and UI interactions
- How to pass parameters to event handlers
- What SyntheticEvent is and why it matters

React makes event handling clean and consistent across components 💡