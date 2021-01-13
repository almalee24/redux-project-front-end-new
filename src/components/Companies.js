import React from 'react'
import { connect } from 'react-redux'

const Companies = (props) => {
   
    return (
        <div>
            {props.companies}
        </div>
        // <div>
        //     {props.companies.map(company => <h3>{company.name}</h3>)}
        // </div>
    )
}

export default Companies 