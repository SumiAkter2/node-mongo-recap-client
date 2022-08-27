import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Component/AddUser";
import Home from "./Component/Home";
import Update from "./Component/Update";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<AddUser />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
