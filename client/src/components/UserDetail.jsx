import React from 'react'
import { detail } from '../redux/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { deleteUser } from '../redux/userSlice'

const UserDetail = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  const {detail:user} = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/form')
  }
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete user!',
      showClass: {
        popup: 'animate__animated animate__slideInRight'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(_id))
          Swal.fire({
           title: 'User deleted!',
           text: 'Your user has been successfully deleted',
           icon: 'success',
           showClass: {
            popup: 'animate__animated animate__wobble'
          }
          })
        navigate('/home')
      }
    })
  }
  
  const handleHome = () => {
    navigate('/home')
  }

  useEffect(() => {
    dispatch(detail(_id))
  }, [dispatch, _id])

  return (
    <div className="w-screen h-screen justify-center items-center bg-orange-700">
    <div className="flex mt-40 ml-[20rem] w-[40rem] h-[20rem] justify-center bg-slate-400 items-center">
      <div className="p-6 rounded-lg shadow-lg bg-orange-200">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">
          {user.name}
        </h5>
        <h5 className="text-gray-500 text-xl leading-tight font-medium mb-2 text-center">
          {user.username}
        </h5>
        <p className="text-gray-700 text-base mb-4 text-center">
          {user.email}
        </p>
        <Link to={`/form/${_id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2.5 px-5 m-5 border border-blue-500 hover:border-transparent rounded-lg" onClick={handleClick}>
          Edit User
        </Link>
        <button onClick={handleDelete}
        type="submit"
        className="text-white bg-green-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-gray-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Delete User
      </button>
      <button onClick={handleHome}
        type="submit"
        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-yellow-700 dark:focus:ring-blue-800 items-center justify-center m-5"
      >
        Back Home
      </button>
      </div>
    </div>
    </div>
  );
}

export default UserDetail