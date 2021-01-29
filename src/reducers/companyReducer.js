export default function companyReducer(state = [], action){
    
    switch (action.type) {
        case 'FETCH_COMPANIES':
            return  [...action.payload]
        case 'ADD_COMPANY':
            return [...state, action.payload]
        case 'ADD_GOOD':
            debugger
            let companies = state.map(company => {
                if (company.id === action.payload.company.id){
                    return action.payload
                }else {
                    return company
                }
            })
            debugger 
            return companies 
        default:
            return state 
    }
}