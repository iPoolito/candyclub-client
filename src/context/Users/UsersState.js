import React, { useReducer } from 'react'

import axiosClient from './../../config/axios'

import UsersContex from './UsersContex'
import UsersReducer from './UsersReducer'

const UsersState = props => {
  const initialState = {
    user: {
      _id: null,
      username: null,
      email: null
    },
    authStatus: false
  }

  const [globalState, dispatch] = useReducer(UsersReducer, initialState)

  const registerUser = async dataForm => {
    try {
      const res = await axiosClient.post('/api/users/create', dataForm)

      const token = res.data.data.token

      dispatch({
        type: `CREAR_USUARIO`,
        payload: token
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UsersContex.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        registerUser
      }}
    >
      {props.children}
    </UsersContex.Provider>
  )
}

export default UsersState
