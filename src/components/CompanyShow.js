import React from 'react'
import {Redirect} from 'react-router-dom'
import GoodsContainer from '../containers/GoodsContainer'

const CompanyShow = (props) => {

    let company = props.companies[props.match.params.name - 1]
    
    return (
        <div>
            <h2>
                {company ? company.name : null}
            </h2>
            <GoodsContainer company={company}/>
        </div>
    )
}

export default CompanyShow