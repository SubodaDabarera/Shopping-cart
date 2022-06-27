import React from 'react'
import axios from 'axios'



export const getAllItems = async(setItems) => {

  try{
    const result = await axios.get('http://localhost:3000/items/')
      .then((result) => {
        setItems(result.data)
    })
  }catch(err){
    console.log(err)
    return err;
  }
}

export const addItems = async(data) => {
  try{
    const createdResult = await axios.post('http://localhost:3000/items/new', data)
      .then(() => console.log('Item created'))

    return createdResult;
  }catch(err){
    console.log(err)
    return err;
  }
}

export const getItemsForFarmer = async(sellerId, setItems) => {
  
  try{
    const items = await axios.get('http://localhost:3000/items/farmer/', {params: {sellerId: sellerId}})
      .then((result) => setItems(result.data))
  }catch(err){
    console.log(err);
    return err;
  }
}

export const editItems = async(data) => {
  try{
    const updatedResult = await axios.put('http://localhost:3000/items/change', data)
      .then(() => console.log("Item updated"))
  }catch(err){
    console.log(err)
    return err;
  }
}