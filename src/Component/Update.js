import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const roll = e.target.roll.value;
    const updatedUser = { name, email, roll };
    console.log(updatedUser);
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        e.target.reset();
      });
  };
  return (
    <div>
      <h1>Updated : {id}</h1>
      <h2>{user.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" placeholder="name" required />
        <br />
        <input type="text" name="email" placeholder="email" required />
        <br />
        <input type="text" name="roll" placeholder="Roll" required />
        <br />
        <button type="submit">Updated </button>
      </form>
    </div>
  );
};

export default Update;
