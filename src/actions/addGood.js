export const addGood = (good) => {
    let company_id = parseInt(good.company_id)
    return (dispatch) => {
        fetch(`http://localhost:3001/companies/${company_id}/goods`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(good)
        })
        .then(response => response.json())
        .then(company => {
            if (company.error) {
              alert(company.error)
            } else {
              dispatch({type: 'ADD_GOOD', payload: company})
            }
          }
        )
      }
}