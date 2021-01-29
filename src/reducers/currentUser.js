export default (state = null, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return action.user.attributes
      case "CLEAR_CURRENT_USER":
        return null
      case 'UPDATE_CURRENT_USER': 
        return action.payload
      default:
        return state
    }
}