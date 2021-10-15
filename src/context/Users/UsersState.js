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

  const loginUser = async dataForm => {
    try {
      const res = await axiosClient.post('/api/auth/login', dataForm)

      const token = res.data.data.token

      dispatch({
        type: 'INICIO_SESION_EXITOSO',
        payload: token
      })
    } catch (error) {
      console.log(error)
    }
  }

  const tokenVerification = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.log('Borrando Token de los headers')
      delete axiosClient.defaults.headers.common['x-auth-token']
    }
    axiosClient.defaults.headers.common['x-auth-token'] = token

    try {
      const res = await axiosClient.get('/api/auth/verifying-token')

      const currentUser = res.data.data.user

      dispatch({
        type: 'OBTENER_USUARIO',
        payload: currentUser
      })
    } catch (error) {
      console.log(error)
    }
  }

  const logoutUser = async () => {
    dispatch({
      type: 'CERRAR_SESION'
    })
  }

  return (
    <UsersContex.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        tokenVerification,
        logoutUser
      }}
    >
      {props.children}
    </UsersContex.Provider>
  )
}

export default UsersState
