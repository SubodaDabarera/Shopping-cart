import axios from 'axios'
import React from 'react'

export const getCustomers = async(sellerId, setCustomers) => {
  try{
    const result = await axios.get('http://localhost:3000/customer/', {params: {sellerId: sellerId}})
      .then((result) => setCustomers(result.data))
  }catch(err){
    console.log(err)
    return err;
  }
}

export const userRegistration = async(data) => {
  try{
    const createdResult = await axios.post('http://localhost:3000/customer/new', data)
      .then(() => console.log("created successfully"))
  }catch(err){
    console.log(err)
    return err;
  }
}

export const userLogIn = async(data, setUserData) => {
  try{
    const loggedInUser = await axios.post('http://localhost:3000/customer/login', data)
      .then((user) => {
        setUserData(user.data)
        if(user.data[0] == true){
          localStorage.setItem('user', JSON.stringify(user.data[1]))
        }
               
      })
  }catch(err) {
    console.log(err);
    return err;
  }
}