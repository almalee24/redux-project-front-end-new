import React from 'react'
import GoodsContainer from '../containers/GoodsContainer'

const CompanyShow = (props) => {
   
    //let company = props.companies.filter(company => company.id == props.match.params.name)[0]
    let company_name 
    props.companies.map(company => 
        {if(company.name.toLowerCase() === props.match.params.id.split('-').join(' ')){
            company_name = company 
        }}
    )

    return (
        <div className="store-header">
            <div className="show-store-info">
                <div className="show-store-logo">
                    <h2>
                        {company_name ? company_name.name : null}
                    </h2>
                </div>
                <div className="store-search">Search Bar</div>
            </div>
            <GoodsContainer company={company_name}/>
        </div>
    )
}

export default CompanyShow