import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { create } from '../redux/userSlice'

import Swal from 'sweetalert2'

const CreateUser = () => {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !username || !email){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please complete all fields!',
        showClass: {
          popup: 'animate__animated animate__fadeInLeft'
        }
  })
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Add user!',
        showClass: {
          popup: 'animate__animated animate__flipInY'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(create(name, username, email))
            Swal.fire({
             title: 'User add!',
             text: 'Your user has been added successfully',
             icon: 'success',
             showClass: {
              popup: 'animate__animated animate__zoomInDown'
            }
          })
          navigate('/home')
        }
      })
    }
  }
  return (
    <div className="flex h-screen items-center justify-center bg-orange-700">
    <form onSubmit={handleSubmit} className="h-auto w-460 justify-center m-28 items-center bg-red-200 rounded-lg p-10">
      <div className="mb-2">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          id="username"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Add User
      </button>
      <button onClick={()=> navigate('/home')}
        type="submit"
        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-red-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Cancel
      </button>
      </div>
    </form>
    </div>
  );
}

export default CreateUser