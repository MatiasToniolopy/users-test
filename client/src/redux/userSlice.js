import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'users',
    initialState : {
        list : [],
        detail: [],
    },
    reducers : {
        setUsers : (state, action) => {
            state.list = action.payload
        },
        userDetails : (state, action) => {
            state.detail = action.payload
        },
        userUpdate : (state, action) => {
            state.list = action.payload
        },
        addUser : (state, action) => {
            state.list.push(action.payload)
        },
        deleteU : (state, action) => {
            state.list.splice(state.list.findIndex((arrow) => arrow._id === action.payload), 1);
        },
        searchUser : (state, action) => {
            state.list = action.payload
        }
    }
})

export default userSlice.reducer;
export const {setUsers, userDetails, userUpdate, addUser, deleteU, searchUser} = userSlice.actions

export const search = (name) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/users/search/?name=${name}`)
    dispatch(searchUser(response.data))
}

export const deleteUser = (_id) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:3001/users/${_id}`)
    dispatch(deleteU(response.data))
} 

export const fetchUser = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/users')
    dispatch(setUsers(response.data))
}

export const detail = (_id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/users/${_id}`)
    dispatch(userDetails(response.data))
}

export const update = (_id, name, username) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:3001/users/${_id}`, {name, username})
        dispatch(userUpdate(response.data))
    } catch (error) {
        console.log(error)
    }
}

export const create = (name, username, email) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:3001/users`, {name, username, email})
        dispatch(addUser(response.data))
    } catch (error) {
        console.log(error)
    }
}