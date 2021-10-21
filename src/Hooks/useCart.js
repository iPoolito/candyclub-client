import { useEffect, useState } from 'react'

export default function useCart() {
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const lsCart = localStorage.getItem('cart')

    if (!lsCart) {
      setCart({})
      return
    }

    setCart(JSON.parse(lsCart))
  }, [])

  useEffect(() => {
    const lsTotal = localStorage.getItem('total')

    if (!lsTotal) {
      setTotal(0)
      return
    }

    setTotal(Number(lsTotal))
  }, [])

  useEffect(() => {
    if (!Object.keys(cart)) return

    const total = Object.keys(cart).reduce((acc, key) => {
      const qty = cart[key].qty
      const price = cart[key].price
      const total = Number(qty) * Number(price)
      return total + acc
    }, 0)
    setTotal(total)
    localStorage.setItem('total', String(total))
  }, [cart])

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
      // total: cart[item._id]?.qty * cart[item._id].price
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

  const deleteCart = () => {
    setCart({})
    localStorage.removeItem('cart')
  }

  return { cart, handleAddItem, handleRemoveItem, deleteCart, total }
}
