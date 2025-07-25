# 🔁 Looping in JSX (React)
<br/>

## 🧠 What is Looping in JSX?

In React, **looping** means dynamically repeating UI elements based on an array of data. You typically use `.map()` instead of traditional `for` loops inside JSX.

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

## ✅ Other Array Methods

* **filter()** – for conditionally displaying items before mapping.
* **reduce()** – for building complex JSX structures.

> ⚠️ Avoid using `for` or `while` directly in JSX. Do calculations outside JSX if needed.

<br/>

## 📦 Lists, Keys, and map()

### 🔁 `map()` for List Rendering

Use `map()` to loop over data and return JSX elements:

```jsx
const skills = ["HTML", "CSS", "JS"];

function SkillList() {
  return (
    <ul>
      {skills.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
  );
}
```

### 🔑 Keys in React

Keys help React identify which items changed, added, or removed.

```jsx
const users = [
  { id: 1, name: "Cutie" },
  { id: 2, name: "Reetu" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

> Use unique IDs from data as keys. Avoid using index unless the list is static.

### ❌ Bad Key Examples

```jsx
<li key={Math.random()}>Bad Key</li> // ❌ new key every render
<li key={index}>Okay only if list is static</li> // ⚠️
```

## 🧠 Conditional Rendering with map()

```jsx
{users.map(user => (
  user.age > 30 ? (
    <p key={user.id}>{user.name} is over 30</p>
  ) : (
    <p key={user.id}>{user.name} is under 30</p>
  )
))}
```

## 🎯 Adding Events in Lists

```jsx
{items.map((item, index) => (
  <button key={index} onClick={() => alert(item)}>
    {item}
  </button>
))}
```

## ❌ Common Mistakes

* Missing or duplicate `key`
* Using `index` as key in dynamic lists
* Writing complex logic inside `map()`
* Mutating original array (`sort`, `reverse`) without copying
* Not checking if array exists before `map()`

<br/>

# 📌 Summary
***Today I have gone through the concept of **looping in JSX**.  
In React, we use **map()** and other **array functions** instead of traditional loops for rendering UI.  
I also understood the concept of **keys** in React — they help identify which items have changed, are added, or removed. Keys should be **unique** to each element to optimize rendering performance.***