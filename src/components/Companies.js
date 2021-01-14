import React from 'react'
import {Route, Link} from 'react-router-dom'
import CompanyShow from './CompanyShow'

const Companies = (company) => {
    return (
        <div>
            {company.companies.map(company =>
             <div key={company.id}>
                <Link to={`/stores/${company.id}`}>{company.name}</Link>
            </div>)}
        </div>
    )
}

export default Companies