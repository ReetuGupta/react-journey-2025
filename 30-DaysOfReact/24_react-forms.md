# Day 24 – React Forms: Handling Inputs, Checkboxes, Radios & Select Menus

## Overview
Today, I learned how to work with **React Forms** by practicing different input types like text fields, checkboxes, radio buttons, textareas, and select menus. I explored how to manage form data using the `useState` hook with a single state object and how to update it dynamically based on user interaction.

## 📚 What I Practiced

### Managing Multiple Inputs
- Used `useState` with an object to handle multiple form fields together.
- Updated the form state based on input changes using a single `handleChange` function.

```jsx
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
  isValue: true,
  mode: "",
  favCar: "",
});

const handleChange = (event) => {
  setFormData((prevFormData) => {
    const { name, value, checked, type } = event.target;
    return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    };
  });
};
```

### Handling Different Input Types
- Text inputs for first name, last name, and email.
- Textarea for comments.
- Checkbox to toggle values.
- Radio buttons for selecting modes.
- Select dropdown for choosing favorite cars.

### Form Submission
- Used handleSubmit to prevent the default form submission behavior.
- Logged the form data when the form is submitted.

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted:", formData);
}
```

### ✨ Key Learnings
- Managing form data using useState and an object structure.
- Handling various input types with a single event handler.
- Implementing controlled components for better state management.
- Learning how form submission works in React.

## 🧠 Summary
Forms are a critical part of any web application. By practicing different input types and managing their state in React, I’ve strengthened my understanding of how user interactions can be handled cleanly and effectively. This practice will be useful in building robust, interactive forms for real-world applications.

***Small but powerful — today’s form handling practice takes me a step closer to mastering React!***