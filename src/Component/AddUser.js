import React from "react";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log("added", user);
  };
  return (
    <div>
      <h1> Please fill the Input </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="text" name="email" placeholder="Email" required />
        <br />
        <button type="submit">Add a user</button>
      </form>
    </div>
  );
};

export default AddUser;
