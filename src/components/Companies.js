import React from 'react'
import {Route} from 'react-router-dom'
import CompanyShow from './CompanyShow'

const Companies = (company) => {
    return (
        <div>
            {company.companies.map(company =>
             <div key={company.id}><CompanyShow company={company}/></div>)}
        </div>
    )
}

export default Companies