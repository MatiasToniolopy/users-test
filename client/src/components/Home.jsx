import React from 'react'
import { useEffect } from 'react'
import User from './User'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUser } from '../redux/userSlice'

const Home = () => {
    const dispatch = useDispatch()
    const {list: user} = useSelector(state => state.users)

    useEffect(() => {
      dispatch(fetchUser())
    },[dispatch])


  return (
    <div className="grid grid-cols-3 gap-6">
      {Array.isArray(user) && user.map((u, index) => (
        <User name={u.name} username={u.username} email={u.email} key={index} _id={u._id}/>
      ))}
    </div>
  );
}

export default Home