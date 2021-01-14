import React from 'react'

const Goods = (props) => {

    return (
        <div>
            {props.goods && props.goods.map(good => 
                <div className="good-container" key={good.id}>
                  <div className="individual-good">
                    <div>
                        <div>
                            <div className="add-cart">+</div>
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