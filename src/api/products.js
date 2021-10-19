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
  GET_FEATURED: async () => {
    try {
      const { data } = await axiosClient.get('/api/products/get-featured')
      const { data: products } = data
      return products
    } catch (error) {
      console.log(error)
    }
  },
  CREATE_PRODUCT: async FormData => {
    try {
      const res = await axiosClient.post('/api/products/create', FormData)
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default PRODUCTS_API
