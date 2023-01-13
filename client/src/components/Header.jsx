import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home';
import { search } from '../redux/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

const Header = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid name, min length 3!'
  })} else {
      dispatch(search(name))
      setName('')
    }
  }

  return (
    <header className="z-50 w-screen p-6 px-16 bg-orange-300">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src="data:image/jpeg;base64,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"
            className="w-10 object-cover rounded-full"
            alt="logo"
          />
          <p className="text text-textColor text-xl font-semibold font-mono">App Users</p>
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
            <Link to={'/home'} className="text-base text-textColor hover:text-black hover:shadow-xl duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </Link>
          </ul>
        </div>
      </div>
      <div className="mt-8 justify-center">
        <Home />
      </div>
    </header>
  );
};

export default Header