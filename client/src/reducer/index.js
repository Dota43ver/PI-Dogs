const initialState = {
    dogs: [],
    allDogs:[]
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs:action.payload,
                allDogs : action.payload
            }
            case 'FILTER_BY_TEMPERAMENT':
                const allDogs = state.allDogs
                const temperamentFiltered = action.payload === 'All' ? allDogs : allDogs.filter(e => e.temperament?.some(e => e === action.payload))
                return {
                   ...state,
                   dogs : temperamentFiltered
                }
        default:
            return state;
    }

}
export default rootReducer;