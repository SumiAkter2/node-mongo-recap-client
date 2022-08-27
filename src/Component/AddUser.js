import React from "react";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("successfully added");
        e.target.reset();
      });
  };
  return (
    <div>
      <h1>Add a user</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" required />
        <br />
        <input type="text" name="email" placeholder="email" required />
        <br />
        <button type="submit">Added user</button>
      </form>
    </div>
  );
};

export default AddUser;
