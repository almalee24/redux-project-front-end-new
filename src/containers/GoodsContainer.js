import React from 'react'
import GoodsInput from '../components/GoodInput'
import Goods from '../components/Goods'

class GoodsContainer extends React.Component {
    render() {
        return (
            <div>
                <GoodsInput company={this.props.company}/>
                <Goods goods={this.props.company && this.props.company.goods}/>
            </div>
        )
    }
}

export default GoodsContainer