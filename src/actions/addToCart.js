export const AddToCart = data => dispatch => {
    debugger
    const userId = current_user.id
    const currentOrder = current_user.current_order
    const productId = data.good.id
    let quantity = data.quantity

    if (currentOrder == null){
        const token = localStorage.token
        fetch('https://localhost:3001/orders/neworder', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                "Authorization": token,
                'Accept':'application/json'
            },
            body: JSON.stringify({user_id: userId, product_id: productId, quantity: quantity})
        }).then(resp => resp.json())
        .then(data => {
            dispatch({type: "UPDATE_CURRENT_USER", current_site_user: data})
        })
    
    } else {
        fetch('https://localhost:3001/orders/neworder', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                "Authorization": token,
                'Accept':'application/json'
            },
            body: JSON.stringify({order_id: currentOrder, user_id: userId, product_id: productId, quantity: quantity})
        }).then(resp => resp.json())
        .then(data => {
            dispatch({type: "UPDATE_CURRENT_USER", current_site_user: data})
        })
    }
}