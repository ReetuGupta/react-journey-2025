# Day 19 – Lifting State Up & Derived State

## Overview
Today I learned how to manage shared data between components using **Lifting State Up** and how to avoid redundant or duplicate data by leveraging **Derived State**. These concepts are essential for keeping the UI consistent and preventing bugs in React applications.

## 📚 What I Learned

### 1. Lifting State Up
- Move state to the nearest common parent when multiple child components need access to the same data.
- Pass the data down through props and update it using callback functions.
- Helps keep the UI in sync and avoids inconsistencies.

```jsx
// Parent Component
const Parent = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </>
  );
};
```

### 2. Derived State
- Avoid storing values that can be computed from existing state or props.
- Example: Instead of storing fullName, compute it from firstName and lastName.

```jsx
const fullName = `${firstName} ${lastName}`;
```
- This prevents duplication and reduces the chance of bugs when one part of the state changes but the derived value is not updated.

### ✨ Best Practices

- Keep state as minimal as possible.
- Lift state only when multiple components need access to it.
- Derive values on the fly instead of storing them separately.

## 🧠 Summary

Lifting state helps keep components in sync, while derived state prevents unnecessary duplication and potential bugs. Together, these techniques make React applications cleaner, more efficient, and easier to maintain.