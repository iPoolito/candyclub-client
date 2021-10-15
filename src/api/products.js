import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

const PRODUCTS_API = {
  GET_PRODUCTS: async () => {
    try {
      const { data } = await axiosClient.get('/api/products/get-all')
      const { data: products } = data
      return products
    } catch (error) {
      console.log(error)
      return []
    }
  },
  DELETE_PRODUCTS: async () => {
    try {
    } catch (error) {}
  }
}

export default PRODUCTS_API
