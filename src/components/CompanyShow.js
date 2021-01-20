import React from 'react'
import {connect } from 'react-redux'
import { add } from '../actions/cart.js'

const CompanyShow = ({add, current_user, companies, router}) => {
   

    //let company = props.companies.filter(company => company.id == props.match.params.name)[0]
   let company_name 
    companies.map(company => 
        {if(company.name.toLowerCase() === router.match.params.id.split('-').join(' ')){
            return company_name = company 
        }} 
    )

    const handleClick = (event, good, current_user, company_name) => {
        event.preventDefault()
        
        add(good, current_user, company_name)
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
                                 <div className="individual-cart">
                                    <div className="add-cart" onClick={((e) => handleClick(e, good, current_user, company_name))}>+</div>
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

const mapStateToProps = state => {
    return {
        companies: state.companyReducer,
        current_user: state.currentUser
    }
}

export default connect(mapStateToProps, { add })(CompanyShow)