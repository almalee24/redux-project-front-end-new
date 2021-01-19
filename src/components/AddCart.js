import React from 'react'
import {add} from '../actions/addGood'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const AddCart = ({add}) => {
    debugger
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        add(add)
      }
        }>
      <input type="submit" value="+"/>
    </form>
    )
}


  
  export default withRouter(connect(null, { add })(AddCart))