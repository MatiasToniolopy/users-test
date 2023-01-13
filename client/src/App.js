import Header from "./components/Header";
import UserDetail from "./components/UserDetail"
import Form from "./components/Form"
import CreateUser from "./components/CreateUser"
import Landing from "./components/Landing"

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Header/>}/>
        <Route path="/detail/:_id" element={<UserDetail/>}/>
        <Route path="/form/:_id" element={<Form/>}/>
        <Route path="/create" element={<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
