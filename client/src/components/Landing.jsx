import React from 'react'
import logo from '../images/lan2.jpeg'
import { FcHome } from "react-icons/fc";
import {useNavigate} from 'react-router-dom'

import Swal from 'sweetalert2'

const Landing = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You can come back later!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, go it!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/home')
      }
    })
  }

  return (
    <div className="relative w-screen h-screen">
      <img src={logo} alt="logo" className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
          onClick={handleClick}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all"
          >
            <FcHome className="text-2xl" />
            <p>Go to Home</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing