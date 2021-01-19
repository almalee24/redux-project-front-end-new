
export const add = (data, user) => {
  debugger
  const userId = parseInt(user.id)
  const currentOrder = user.attributes.current_order 
  const goodId = data.id
  let quantity = 1

  if(currentOrder == null){
    debugger
    fetch("http://localhost:3001/orders/neworder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: userId, product_id: goodId, quantity: quantity})
    })
    .then(rsp => rsp.json())
    .then(data => {
      const order = {...data.order, order_items: data.order_items }
    })
  }else {
    fetch("http://localhost:3001/order_items", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({order_id: currentOrder, product_id: goodId, quantity: quantity})
    })
    .then(rsp => rsp.json())
    .then(data => {
    })
  }

  console.log(data)
    // debugger
    //   return fetch("http://localhost:3001/add_cart", {
    //     credentials: "include",
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(credentials)
    //   }
    //     .then(r => r.json())
    //     .then(response => {
    //       console.log(response)})
 }
  
