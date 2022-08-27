import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Component/AddUser";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <h1>Call from header</h1>
      <AddUser />
    </div>
  );
}

export default App;
