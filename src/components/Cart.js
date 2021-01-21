import React, {useEffect}  from 'react'
import {Link} from 'react-router-dom'
import cart from '../img/cart-outline.svg'
import trash from '../img/trash-outline.svg'

const Cart = (props) => {
    const [container, setContainer] = React.useState();

    useEffect(() => {
        const container = document.createElement("div")
        setContainer(container)
        document.appendChild(container)
    }, []);
   
    //let grouped = _.groupBy(props.order[0].order_items,  'company_id')
    let order_items = props.order[0].order_items.reduce((acc, item) => {
        (acc[item.company_name] = acc[item.company_name] || []).push(item);
          return acc;
    }, {})

    debugger
    // let order_items = []
    // let companies 

    // {if(props.order[0] !== undefined){
    //     companies =  Array.from(new Set(order_items.order_items.map(item => item.company_id)))
    //     companies.map(company => {
    //         props.order[0].order_items.map(item => {
    //             item.copany_id ==
    //         })
    //     })
    // }}
    return(
        React.createPortal(
            <div style={{position: 'fixed', height: '100%', width: '100%', zIndex: 1000}} onClick={props.onClose}>
                <div onClick={e => e.stopPropagation()}>
                    {props.children(props.onClose)}
                </div>
            </div>,
            container,
        )
    )

    // return(
    //     <div>
    //         {props.order[0] == undefined ? 
            
    //             <div className="inside-cart">
    //                 <div>
    //                     <img src={cart}></img>
    //                 </div>
    //                 <h2>Your personal cart is empty</h2>
    //                 <Link to='/stores'>Start Now</Link> 
    //             </div> :
               
    //             <div>
    //                 <div className="inside-cart">
    //                     <h2>Personal Cart</h2>
    //                 </div>
    //                 <div>
    //                 {/* <>{Object.entries(order_items)[0].map(order => {
    //                     <div className='cart-company-container' key={order.company_id}>
    //                        <>{Object.entries(order_items)[1].map(item => {
    //                         <div className="cart-company-info">
    //                             <div className="cart-company">
    //                                 <div className="cart-comapny-logo-bg">
    //                                     <img className="cart-company-logo" src={item.company_logo}></img>
    //                                 </div>
    //                             </div>
    //                             <div className="cart-company-title">{order}</div>
    //                         </div>
    //                         <div className="cart-item-container">
    //                             <div className="cart-item-sale">
    //                                 <img src={item.good_image} alt="good image"></img>
    //                                 <div className="cart-item-info">
    //                                     <div className="good-name">{item.good_name}</div>
    //                                     <div className="good-weight">{item.good_weight}</div>
    //                                     <Link to="">
    //                                         <button className="cart-item-delete">
    //                                             <img src={trash}></img>
    //                                             Remove
    //                                         </button>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                             <div className="cart-total-quantity">{item.quantity}</div>
    //                             <div className="cart-total-price">${item.total}</div>
    //                         </div>
    //                         })}</>
    //                     </div>
    //                 })}</> */}
    //                 </div>
    //             </div> 
    //         }
    //     </div>
    // )
}


export default Cart

