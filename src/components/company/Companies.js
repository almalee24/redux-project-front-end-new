import React from 'react'
import { connect } from 'react-redux'
import CompanyStoreFront from './CompanyStoreFront'

const Companies = (company) => {
    <CompanyStoreFront company={company.company} />
    return (
        <div className="company-container">
            {company.company.name}
        </div>
    )
}

export default Companies