import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Home from './Home';
import { search } from '../redux/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

import { auth } from '../firebase.config'
import Landing from './Landing'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid name, min length 3!',
        showClass: {
          popup: 'animate__animated animate__jackInTheBox'
        }
  })} else {
      dispatch(search(name))
      setName('')
    }
  }

  const handleLogout = async () => {
    await auth.signOut()
    navigate('/')
  }

  return (
    <header className="z-50 w-screen p-6 px-16 bg-orange-300">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={user && user.photoURL}
            className="w-10 object-cover rounded-full"
            alt="logo"
            referrerPolicy="no-referrer"
          />
          <p className="text text-textColor text-xl font-semibold font-mono">{user ? user.email : 'App users'}</p>
        </Link>

        <form className="pt-2 relative mx-auto text-gray-600" onSubmit={handleSubmit}>
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="text"
            value={name}
            placeholder="Search User"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to={"/create"}>
              <li className="text-base text-textColor hover:text-black hover:shadow-xl duration-100 transition-all ease-in-out cursor-pointer hover:scale-x-105">
                Create User
              </li>
            </Link>
            <button  onClick={handleLogout} className="text-base text-textColor hover:text-black hover:shadow-xl duration-100 transition-all ease-in-out cursor-pointer">
              Logout
            </button>
          </ul>
        </div>
      </div>
      <div className="mt-8 justify-center">
      {user ? <Home user={user}/> : <Landing/>}
      </div>
    </header>
  );
};

export default Header