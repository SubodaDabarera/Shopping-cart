import React, {useEffect, useState } from 'react'
import { getCart } from '../api/CartApi'

const Cart = () => {

    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')))
    const [cartItems, setCartItems] = useState([])

    // console.log(JSON.parse(localStorage.getItem('user')))
    const userInfo = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        getCart(userInfo._id, setCartItems)
    }, [])

  return (
    <div style={{textAlign: "center"}}>
        <h1>My Cart</h1>
        {
            cartItems.map((item) => {
                return (
                    <div key={item._id} style={{backgroundColor: "red", textAlign:"center", padding: "0.5rem", margin: "1rem"}}>
                        <p>{item.itemName}</p>
                        <p>{item.itemPrice}</p>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Cart