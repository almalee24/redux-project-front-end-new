export const addCompany = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/companies', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'ADD_COMPANY', payload: company}))
    }
}