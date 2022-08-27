import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const handleToDelete = (id) => {
    const process = window.confirm("Are you sure to delete?");
    if (process) {
      console.log("deleting", id);
      fetch(` http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log("Successfully deleted one document.");
            const remaining = user.filter((u) => u._id !== id);
            setUser(remaining);
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        });
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
          <button key={u._id}>Update</button>
        </li>
      ))}
    </div>
  );
};

export default Home;
