export function fetchCompanies(){ 
    return(dispatch) => {
        fetch('http://localhost:3001/companies')
        .then(resp => resp.json())
        .then(companies => dispatch({
            type: 'FETCH_COMPANIES', 
            payload: companies
        }))
    }
}