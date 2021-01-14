import React from 'react'
import {Route, Link} from 'react-router-dom'
import CompanyShow from './CompanyShow'

const Companies = (company) => {
    return (
        <div className='company-container'>
            <ul>
                {company.companies.map(company =>
                <li className="store-card" key={company.id}>
                    <Link to={`/stores/${company.name.toLowerCase().split(' ').join('-')}/storefront`}>{company.name}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Companies

    