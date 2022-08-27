import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Updated : {id}</h1>
    </div>
  );
};

export default Update;
