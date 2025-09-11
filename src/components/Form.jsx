import { useState } from "react";

export function Form() {
  //1st method
  // const [firstName, setFirstName] = useState("")

  // console.log(firstName)

  //const [lastName, setLastName] = useState("")

  // console.log(lastName)

  //  const handleFName = (event) => {
  //   return(
  //     //console.log(event.target.value)
  //     setFirstName(event.target.value)
  //   )
  //  }

  // const handleLName = (event) => {
  //   return(
  //     //console.log(event.target.value)
  //     setLastName(event.target.value)
  //   )
  //  }

  /* *******handling multiple states- 1 way is using separate state variables for all and another way is by using object***** */
  //2nd method
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isValue: true,
    mode: "",
    favCar: "",
  });
  //console.log(formData)

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("My First React Form is Submitted....");
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FirstName"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="LastName"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="abc@gmail.com"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder="comments.."
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />

        <br />
        <br />

        <input
          type="checkbox"
          name="isValue"
          id="isValue"
          onChange={handleChange}
          checked={formData.isValue}
        />

        <label htmlFor="isValue">Hello user in checkbox</label>

        <br />
        <br />

        <input
          type="radio"
          name="mode"
          id="online-mode"
          onChange={handleChange}
          checked={formData.mode === "online-mode"}
          value="online-mode"
        />

        <label htmlFor="online-mode">Online Mode</label>

        <input
          type="radio"
          name="mode"
          id="offline-mode"
          onChange={handleChange}
          checked={formData.mode === "offline-mode"}
          value="offline-mode"
        />

        <label htmlFor="offline-mode">Offline Mode</label>

        <br />
        <br />

        <label htmlFor="favCar">Select ur favourite car </label>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={handleChange}
        >
          <option value="Tharr">Tharr</option>
          <option value="Scarpio">Scarpio</option>
          <option value="Fortuner">Fortuner</option>
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
