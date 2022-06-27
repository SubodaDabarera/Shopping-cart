import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { editItems } from '../api/ItemApi'

const EditItems = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState(location.state.item.name)
    const [price, setPrice] = useState(location.state.item.price)
    const [quantity, setQuantity] = useState(location.state.item.quantity)

    const userInfo = JSON.parse(localStorage.getItem('user'))


    const onSubmitClick = () => {
        editItems({itemId: location.state.item._id, sellerId: userInfo._id ,name, price, quantity})

        navigate('/allItems')
    }

  return (
    <div style={{textAlign: "center", marginTop: "4rem"}}>
        <h1>Edit Item </h1>
        <div>
            <span>Name: </span> <br/>
            <input type='text' required 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <div style={{marginTop: "1rem"}}>
            <span>Price: </span> <br/>
            <input type='number' required 
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
            />
        </div>
        <div style={{marginTop: "1rem"}}>
            <span>Quantity: </span> <br/>
            <input type='number' required 
                value={quantity}
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

export default EditItems