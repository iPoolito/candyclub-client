import React, { useEffect } from 'react'
import PRODUCTS_API from '../api/products'
export default function Market() {
  useEffect(() => {
    const fetchData = async () => {
      const products = await PRODUCTS_API.GET_PRODUCTS()
      console.log(products)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>VISTA DE MARKET</h1>
    </div>
  )
}
