import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleToDelete = (id) => {
    const process = window.confirm("Are you sure to delete?");
    if (process) {
      console.log("deleting", id);
    } else {
    }
  };
  return (
    <div>
      <h1>Available User : {user.length}</h1>
      {user.map((u) => (
        <li key={u._id}>
          {u.name} :{u.email}
          <button
            onClick={() => {
              handleToDelete(u._id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Home;
