import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

const ORDERS_API = {
  CREATE_ORDER: async FormData => {
    try {
      const token = localStorage.getItem('token')

      if (!token) {
        console.log('Borrando Token de los headers')
        delete axiosClient.defaults.headers.common['x-auth-token']
      }
      axiosClient.defaults.headers.common['x-auth-token'] = token

      const { data } = await axiosClient.post('/api/orders/create-order', FormData)
      const { data: order } = data
      return order
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

export default ORDERS_API
