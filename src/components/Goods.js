import React from 'react'

const Goods = (props) => {
    debugger
    return (
        <div>
            {props.goods && props.goods.map(good => 
                <div className="good-container" key={good.id}>{good.name}</div>
            )}
        </div>
    )
}

export default Goods 