import { useEffect, useState } from 'react'

export default function useCart() {
  const [cart, setCart] = useState({})

  useEffect(() => {
    const lsCart = localStorage.getItem('cart')

    if (!lsCart) {
      setCart({})
      return
    }

    setCart(JSON.parse(lsCart))
  }, [])

  const handleAddItem = item => {
    if (!Object.keys(cart)) {
      const newCart = {
        [item._id]: {
          ...item,
          qty: 1
        }
      }

      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    }

    const newCart = {
      ...cart,
      [item._id]: {
        ...item,
        qty: cart[item._id]?.qty ? cart[item._id].qty + 1 : 1
      }
    }

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const handleRemoveItem = item => {
    const itemQty = cart[item._id]?.qty

    if (itemQty === 1) {
      const newCart = { ...cart }
      delete newCart[item._id]

      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    }

    const newCart = { ...cart }
    newCart[item._id] = {
      ...item,
      qty: itemQty - 1
    }
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return { cart, handleAddItem, handleRemoveItem }
}
