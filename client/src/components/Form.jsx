import React, { useState } from 'react'
import { update } from '../redux/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { detail } from '../redux/userSlice'
import Swal from 'sweetalert2'

const Form = () => {
  const {detail:user} = useSelector((state) => state.users)
  const {_id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You can edit it again later!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit user!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(update(_id, name, username))
        Swal.fire(
          'Edit Ok!',
          'Your file has been edit.',
          'success'
        )
        navigate('/home')
      } else {
         Swal.fire(
          'Edit Cancel!',
          'Your file not edit.',
          'error'
        )
      }
    })
  }

  useEffect(() => {
    dispatch(detail(_id))
  },[dispatch, _id])

  useEffect(() => {
    setName(user.name)
    setUsername(user.username)
  }, [user])

  return (
    <div className="flex h-screen items-center justify-center bg-orange-700">
    <form
      onSubmit={handleSubmit}
      className="h-auto w-460 justify-center m-28 items-center bg-red-400 rounded-lg p-10"
    >
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
          value={name || ""}
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
          value={username || ""}
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Confirm
      </button>
      <button
        onClick={() => navigate("/home")}
        type="submit"
        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Cancel
      </button>
      </div>
    </form>
    </div>
  );
}

export default Form