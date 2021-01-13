import React from 'react'
import { connect } from 'react-redux'

const CompanyStoreFront = (company) => {
    debugger
    
    return (
        <div className="company-container">
            {company.name}
        </div>
    )
}

export default CompanyStoreFront