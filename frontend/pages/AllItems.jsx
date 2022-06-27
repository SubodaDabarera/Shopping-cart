import React, { useEffect, useState } from 'react'
import { Link, Router, Router, useNavigate } from 'react-router-dom'
import { addCartItems } from '../api/CartApi';
import { getAllItems, getItemsForFarmer } from '../api/ItemApi';


const itemsArr = [
    {id: "1", name: "item1", price: "100"},
    {id: "2", name: "item2", price: "200"},
    {id: "3", name: "item3", price: "300"},
    {id: "4", name: "item4", price: "400"},
    {id: "5", name: "item5", price: "500"},
]

const AllItems = () => {

    const navigate = useNavigate();
    const [myCart, setMyCart] = useState([])
    const [items, setItems] = useState([])

    const userInfo = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        async function tempFunct() {
            if(userInfo.role == 'Customer'){
                await getAllItems(setItems);
            }
            if(userInfo.role == 'Trader'){
                await getItemsForFarmer(userInfo._id, setItems);
            }
        }
        tempFunct();
    }, [])

    const onAddToCart = (item) => {
        addCartItems({userId:userInfo._id, sellerId:item.sellerId, itemName:item.name, itemId:item._id, itemPrice:item.price, itemQuantity:item.quantity})
            .then(() => console.log("success"))
    }

  return (

    <div style={{marginTop: "1rem"}}>
        {
            userInfo.role == 'Customer' &&
                <Link to = '/myCart'>
                    <button style={{float: "right"}}
                        // onClick = {() => localStorage.setItem('cartItems', JSON.stringify(myCart))}
                    >My Cart</button>
                </Link>
        }

        <div>
            <button style={{float: "right",margin: '0.5rem'}}
                    onClick = {() => {
                        localStorage.removeItem('user')
                        navigate('/')
                    }}
            >LogOut</button>

            {
                userInfo.role == 'Trader' && 
                <>
                    <Link to = '/addItems'>
                        <button style={{float: "right", margin: '0.5rem'}}>
                            Add Items
                        </button>
                    </Link>
                    <Link to = '/myCustomers'>
                        <button style={{float: "right", margin: '0.5rem'}}>
                            My Customers
                        </button>
                    </Link>
                </>
            }
            
        </div>
        
        <div style={{marginTop: "3rem", textAlign: "center"}}>
                <h1>Items</h1>
                {
                    items.map((item, index) => {
                        return <div key={item._id}> 
                            <div style={{backgroundColor: "gray", padding: "2rem", margin: "1rem"}}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                {
                                    userInfo.role == 'Customer' ?
                                    <button onClick={() => onAddToCart(item)}>Add to cart</button>
                                    :
                                    <button
                                        onClick = {async() => {
                                            await navigate('/editItems', {state: {item: item} });
                                        }}
                                    >Edit</button>
                                }
                            </div>
                        </div>
                    })
                }
            

        </div>
    </div>
  )
}

export default AllItems