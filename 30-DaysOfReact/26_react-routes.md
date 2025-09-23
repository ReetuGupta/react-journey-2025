# Day 26 – React Router: Navigation, Nested Routes & useNavigate

## Overview
Today, I learned how to work with **React Router (v7)** for handling navigation in React applications. I explored routing concepts like `BrowserRouter`, `Routes`, `Route`, `NavLink`, nested routes with `Outlet`, and programmatic navigation with `useNavigate`.

## 📚 What I Practiced

### Navigation with NavLink
- Implemented navigation using `<NavLink>` for Home, About, Support, and Labs pages.
- Highlighted active links automatically.

```jsx
<nav>
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/support">Support</NavLink></li>
    <li><NavLink to="/labs">Labs</NavLink></li>
  </ul>
</nav>
```

### Nested Routes with Outlet
- Created a MainHeader layout component.
- Used <Outlet /> to render child routes dynamically.

```jsx
export default function MainHeader() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
```

### Defining Routes
- Used Routes and Route to configure paths for each component.
- Added NotFound page for invalid routes.

```jsx
<Routes>
  <Route path="/" element={<MainHeader />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/support" element={<Support />} />
    <Route path="/labs" element={<Labs />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

### Programmatic Navigation
- Used useNavigate hook to navigate programmatically.

```jsx
const navigate = useNavigate();
<button onClick={() => navigate("/about")}>Go To About Page</button>
```

### ✨ Key Learnings
- Setting up navigation with NavLink.
- Using nested routes with <Outlet /> for layouts.
- Handling invalid routes with a NotFound component.
- Navigating programmatically with useNavigate.

## 🧠 Summary
Routing is essential for building multi-page React apps. Today’s practice helped me understand navigation, nested routes, and dynamic redirection, which are the backbone of creating structured and user-friendly applications.
