import React from 'react'
import { connect } from 'react-redux'

const CompanyShow = (props) => {

    let company = props.companies[props.match.params.name - 1]
    
    return (
        <div className="company-container">
          {company ? company.name : null}
        </div>
        
    )
}

export default CompanyShow