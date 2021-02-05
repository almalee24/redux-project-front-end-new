export default function companyReducer(state = [], action){
    
    switch (action.type) {
        case 'FETCH_COMPANIES':
            return  [...action.payload]
        case 'ADD_COMPANY':
            return [...state, action.payload]
        case 'ADD_GOOD':
            
            // let companies = state.map(company => {
            //     if (company.id === action.payload.company.id){
            //         return action.payload
            //     }else {
            //         return 
            //     }
            // })
            return [...state]
        default:
            return state 
    }
}