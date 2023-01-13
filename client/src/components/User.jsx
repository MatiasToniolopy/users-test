import React from 'react'
import { Link } from 'react-router-dom';

const User = ({name, username, email, _id}) => {
  return (
    <div
      className="w-30 bg-slate-100 rounded-md items-center justify-center flex flex-col hover:bg-green-400
      transition delay-100 duration-700 ease-in-out hover:translate-y-4 shadow-lg shadow-slate-600"
    >
      <Link to={`/detail/${_id}`} className="flex items-center gap-2">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
          className="w-20 object-cover rounded-full"
          alt="logo"
        />
      </Link>
      <h2 className="text text-black justify-center items-center text-center">{name}</h2>
      <p className="text text-blue-700 justify-center items-center text-center">{username}</p>
      <p className="text text-cartNumBg justify-center items-center text-center">{email}</p>
    </div>
  );
}

export default User