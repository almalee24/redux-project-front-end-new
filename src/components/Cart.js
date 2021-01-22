import React from 'react'
import {Link} from 'react-router-dom'
import cart from '../img/cart-outline.svg'
import OrderItems from '../components/OrderItems'

const Cart = (props) => {
   
    let order_items 
    let companies
    debugger 
    if(props.order.length !== 0){
        order_items =  props.order[0].order_items.reduce((acc, item) => {
            (acc[item.company_id] = acc[item.company_id] || []).push(item);
              return acc;
        }, {})
        companies = Object.keys(order_items)
    }
       
    if(props.order[0] === undefined){
        return(
            <div className="inside-cart">
                <div><img src={cart} alt="cart logo"></img></div>
                <h2>Your personal cart is empty</h2>
                <Link to='/stores'>Start Now</Link> 
            </div> 
        )
    }else{
        return (
                <div>{companies.map(x => {
                    let itemDetails = order_items[x];
                    console.log(itemDetails)
                    

                    {itemDetails.map(item => {
                        debugger 
                       return( <div key={x}>
                          <OrderItems cart={itemDetails} />
                        </div>)
                       
                    })}

                })}</div>
        )
    }
}


export default Cart

