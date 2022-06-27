import React, { useEffect, useState } from 'react'
import { getCustomers } from '../api/CustomerApi';

const customerArray = [
    {id: '11', name: 'John perera', email: 'john@gmail.com', itemId: '2'},
    {id: '12', name: 'John perera2', email: 'john@gmail.com2', itemId: '1'},
    {id: '13', name: 'John perera3', email: 'john@gmail.com3', itemId: '4'},
    {id: '14', name: 'John perera4', email: 'john@gmail.com4', itemId: '3'},
    {id: '15', name: 'John perera5', email: 'john@gmail.com5', itemId: '5'},
]

const ViewCustomers = () => {

    const [customers, setCustomers] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        getCustomers(userInfo._id,setCustomers)
    }, [])

  return (
    <div style={{textAlign: 'center'}}>
        <h1>My Customers</h1>
        <div style={{marginTop: "4rem"}}>
            {
                customers.map((customer) => {
                    return <div key={customer._id} style = {{marginTop: "2rem", backgroundColor: "#d6ffe1", padding: '1rem'}}>
                            {/* <p><b>Name : </b>{customer.name}</p> 
                            <p><b>Email :</b> {customer.email}</p>  */}
                            <p><b>User id :</b> {customer.userId}</p> 
                            <p><b>Item Id :</b> {customer.itemId}</p> 
                        </div>
                })
            }
        </div>

    </div>
  )
}

export default ViewCustomers