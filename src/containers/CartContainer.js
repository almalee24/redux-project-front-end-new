import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCart} from '../actions/cart.js'
import Cart from '../components/Cart'
import '../App.css'


class CartContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCart()
    }

    render(){
        const order = this.props.orders.filter(order => order.id === this.props.current_user.attributes.current_order)
        debugger
        
        return (
            <div >
                
                <Switch>
                    <Route exact path='/cart' render={(routerProps) => <Cart order={order} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger 
    return {
        orders: state.ordersReducer,
        current_user: state.currentUser,
        companies: state.companyReducer
    }
}

export default connect(mapStateToProps, {fetchCart})(CartContainer)