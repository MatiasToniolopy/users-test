import Header from "./components/Header";
import UserDetail from "./components/UserDetail"
import Form from "./components/Form"
import CreateUser from "./components/CreateUser"
import Landing from "./components/Landing"

import {Routes, Route} from "react-router-dom"
import { auth } from './firebase.config'
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="w-screen h-auto flex flex-col">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={!user ? <Landing/>: <Header/>}/>
        <Route path="/detail/:_id" element={!user ? <Landing/>: <UserDetail/>}/>
        <Route path="/form/:_id" element={!user ? <Landing/>: <Form/>}/>
        <Route path="/create" element={!user ? <Landing/>: <CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
