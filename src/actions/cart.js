export const add = (data, user, company) => dispatch => {
  const userId = parseInt(user.id)
  const currentOrder = user.attributes.current_order 
  const goodId = data.id
  const companyId = company.id
  let quantity = 1
  
  
    if(currentOrder == null){
      fetch("http://localhost:3001/orders/neworder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id: userId, product_id: goodId, quantity: quantity, company_id: companyId})
      })
      .then(rsp => rsp.json())
      .then(data => {
        const order = {...data.order, order_items: data.order_items }
        dispatch({ type: "UPDATE_CURRENT_USER", payload: data}) 
      })
    }else {
      
      fetch("http://localhost:3001/order_items", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({user_id: userId, order_id: currentOrder, product_id: goodId, quantity: quantity, company_id: companyId})
      })
      .then(rsp => rsp.json())
      .then(data => {
        dispatch({ type: "UPDATE_CURRENT_USER", payload: data}) 
      })
    }
}



export const fetchCart = (user) => {
  
  return(dispatch) => {
    fetch('http://localhost:3001/orders')
        .then(resp => resp.json())
        .then(orders => dispatch({
            type: 'FETCH_ORDERS', 
            payload: orders
        }))
  }
}