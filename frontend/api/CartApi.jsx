import axios from 'axios'
import React from 'react'

export const addCartItems = async(data) => {
  try{
    const result = await axios.post('http://localhost:3000/cart/add', data)
      .then(() => console.log("Item added to the cart"))
  }catch(err){
    console.log(err)
    return err;
  }
}

export const getCart = async(userId, setCartItems) => {
  try{
    const cartItems = await axios.get('http://localhost:3000/cart/', {params: {userId: userId}})
      .then((response) => setCartItems(response.data))
  }catch(err){
    console.log(err)
    return err;
  }
}