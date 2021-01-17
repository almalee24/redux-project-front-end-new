import React from 'react'
import addToCart from '../actions/addToCart'

const Goods = (props) => {
    const handleClick = (good) => {
        <addToCart data={good} />
    }

    return (
        <div>
            {props.goods && props.goods.map(good => 
                <div className="good-container" key={good.id}>
                  <div className="individual-good">
                    <div>
                        <div>
                            <div className="add-cart" onClick={handleClick(good)}>+</div>
                        </div>
                    </div>
                    <div>
                        <div className="individual-price"><h2>{good.price}</h2></div>
                        <div className="individual-name"><h2>{good.name}</h2> </div>
                        <div className="individual-weight"><h2>{good.weight}</h2></div>
                    </div>
                  </div>
                </div>
            )}
        </div>
    )
}

export default Goods 