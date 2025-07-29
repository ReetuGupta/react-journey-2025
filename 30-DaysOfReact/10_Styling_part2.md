# Day 10: More Styling Methods in React.js
<br/>

Yesterday I explored Inline Styling, CSS Stylesheets, and CSS Modules.
Today I learned about three more modern ways to style React apps effectively.

## 🎯 4. Utility-First CSS Frameworks (e.g., Tailwind CSS)
These frameworks offer ready-to-use utility classes that you apply directly to elements.

```jsx
function TailwindCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold">Tailwind Styled Card</h2>
    </div>
  );
}
```

✅ Fast to build, responsive by default\
✅ No need to leave JSX for styling\
❌ Can get messy in large components without good class management

## 🎯 5. Component Libraries (e.g., Material UI, Chakra UI, Ant Design)
These libraries offer prebuilt React components with consistent design and theming.

```jsx
import { Button } from "@mui/material";

function MUIButton() {
  return <Button variant="contained" color="primary">Click Me</Button>;
}
```

✅ Saves time with ready-to-use components\
✅ Great for dashboards or admin panels\
❌ Less customization flexibility unless overridden

## 🎯 6. CSS-in-JS (e.g., styled-components, Emotion)
We write actual CSS inside JavaScript files using tagged template literals.

```jsx
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: tomato;
  text-align: center;
  margin-top: 20px;
`;

function StyledComponent() {
  return <StyledHeading>Styled Components are awesome!</StyledHeading>;
}
```

✅ Scoped styles with dynamic support\
✅ Powerful for component-driven design\
❌ Extra dependency, slight learning curve

<br/>

# ⚡ Summary
***🔥 Today I explored 3 more ways to style React components:***

- Utility Frameworks like Tailwind CSS
- Component Libraries like MUI
- CSS-in-JS like styled-components

***These are especially useful in modern and large-scale projects where maintainability, responsiveness, and rapid development are key.***

