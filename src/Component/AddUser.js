import React from "react";

const AddUser = () => {
  const handleSubmit = () => {};
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
