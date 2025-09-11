# Day 16 – React Events: Deep Dive (Part 2)

## Overview
Today I continued exploring **React event handling**, focusing on advanced techniques that are essential for building real-world, interactive applications. Beyond simple events like `onClick` or `onChange`, understanding how to control event behavior precisely helps in creating clean and scalable apps.

## 📚 What I Learned

### 1. `preventDefault()`
Prevents the default browser behavior, such as form submission or link navigation. Useful when handling logic manually.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted!");
};
```

### 2. `stopPropagation()`
Stops the event from bubbling up to parent elements. This is useful when you have nested interactive components and want to isolate events.

```jsx
const handleClick = (e) => {
  e.stopPropagation();
  console.log("Clicked child only");
};
```

### 3. `Accessing Custom Data Attributes`
React allows using data-* attributes to pass custom data to handlers.

```jsx
const handleClick = (e) => {
  const id = e.target.dataset.id;
  console.log("Item ID:", id);
};
```

### 4. `Inline vs Separate Event Handlers`
While inline handlers are quick, separating the logic into functions improves readability and maintainability.

```jsx
<button onClick={(e) => console.log("Inline click")}>Click Me</button>

<button onClick={handleClick}>Click Me</button>
```

### 5. `SyntheticEvent Lifecycle`
React wraps browser events in a cross-browser compatible wrapper called SyntheticEvent.<br>
Earlier React versions reused event objects, requiring e.persist() to retain data for asynchronous tasks.<br>
In React 17+, this behavior has been deprecated, and event objects are no longer pooled.

## 🧠 Summary

Mastering event handling is key for writing robust and maintainable React applications. Understanding how to prevent default behaviors, stop propagation, access custom data, and structure handlers properly ensures better control over interactions.