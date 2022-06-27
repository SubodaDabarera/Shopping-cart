import React, { useState } from 'react'
import { addItems } from '../api/ItemApi'

const NewItem = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.0)
    const [quantity, setQuantity] = useState(0)

    const userInfo = JSON.parse(localStorage.getItem('user'))

    const onSubmitClick = () => {
        console.log(name, price, quantity)

        addItems({sellerId: userInfo._id ,name, price, quantity})
    }


  return (
    <div style={{textAlign: "center", marginTop: "4rem"}}>
        <h1>Add new Item </h1>
        <div>
            <span>Name: </span> <br/>
            <input type='text' required 
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <div style={{marginTop: "1rem"}}>
            <span>Price: </span> <br/>
            <input type='number' required 
                onChange={(e) => setPrice(e.target.value)} 
            />
        </div>
        <div style={{marginTop: "1rem"}}>
            <span>Quantity: </span> <br/>
            <input type='number' required 
                 onChange={(e) => setQuantity(e.target.value)} 
            />
        </div>
        <div style={{marginTop: "1rem"}}>
            <button onClick={onSubmitClick}>
                Submit
            </button>
        </div>
    </div>
  )
}

export default NewItem