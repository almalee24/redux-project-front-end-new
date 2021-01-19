import React from 'react'
import { add } from '../actions/addToCart'
import { connect } from 'react-redux'

const CompanyShow = props => {
   debugger 
    let current_user = props.data
   
    //let company = props.companies.filter(company => company.id == props.match.params.name)[0]
    let company_name 
    props.companies && props.companies.map(company => 
        {if(company.name.toLowerCase() === props.match.params.id.split('-').join(' ')){
            return company_name = company 
        }} 
    )

    const handleClick = (event, good, current_user) => {
        event.preventDefault()
        add(good, current_user)
    }
    

    return (
        <div className="store-header">
            <div className="show-store-info" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 80%), url(${company_name && company_name.image_background})`}}>
                <div className="show-store-images">
                    <div className="store-logo-circle">
                        <img className="show-store-logo" src={company_name && company_name.image_logo}></img>
                    </div>
                    <h2>{company_name && company_name.name}</h2>
                </div>
            </div>
            <div className="show-store-goods">
                {company_name && company_name.goods.map(good => 
                    <div className="good-container" key={good.id}>
                        <div className="good-container-individual">
                            <div>
                                 <img className="individual-picture" src={good.image}></img>
                                 <div class="individual-cart">
                                    <div className="add-cart" onClick={((e) => handleClick(e, good, current_user))}></div>
                                 </div>
                            </div>
                            <div className="individual-price"><h2>${good.price}</h2></div>
                            <div className="individual-name"><h2>{good.name}</h2> </div>
                            <div className="individual-weight"><h2>{good.weight}oz</h2></div>
                        </div>
                    </div>
                )}
            </div>
        </div> 
    )
}


export default CompanyShow