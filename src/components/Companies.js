import React from 'react'
import {Route, Link} from 'react-router-dom'
import CompanyShow from './CompanyShow'

const Companies = (company) => {
   
    return (
        <div className='company-container'>
                {company.companies.map(company =>
                <div className="store-card" key={company.id}>
                    <Link to={`/stores/${company.name.toLowerCase().split(' ').join('-')}/storefront`}>
                        <div className="store-background">
                            <div className="store-logo">LOGO</div>
                        </div>
                        <div className="store-info">
                            <div className="store-name">
                                {company.name}
                            </div>
                            <div className="store-features">
                                Delivery
                            </div>
                        </div>
                    </Link>
                </div>)}
           
        </div>
    )
}

export default Companies

    