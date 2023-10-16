import {Routes , Route , Link , NavLink,} from "react-router-dom"
import Login from "./components/Login.js";
import Form from "./components/Form.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    
    </Routes>
  );
}

export default App;
