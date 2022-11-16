const initialState = {
    dogs: [],
    allDogs:[],
    temperaments:[]
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
                const temperamentFiltered = action.payload === 'All' ? allDogs : allDogs.filter(e => e.temperaments?.some(e => e === action.payload))
                return {
                   ...state,
                   dogs : temperamentFiltered
                }
            case 'FILTER_CREATED':
                const allDogs2 = state.allDogs
                const createdFilter = action.payload === 'created' ? allDogs2.filter(el => el.createdInDb) : allDogs2.filter(el => !el.createdInDb)
                return{
                    ...state,
                    dogs: action.payload === 'All' ? state.allDogs : createdFilter
                }
            case 'ORDER_BY_NAME':
                const sortedName =
        action.payload === "asc"
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedName,
      };
            case 'GET_NAME_DOGS':
            return{
              ...state,
              dogs: action.payload
            }
            case 'POST_DOG':
              return{
                ...state,
              }
            case 'GET_TEMPERAMENT':
              return{
                ...state,
                temperaments: action.payload
              }
        default:
            return state;
    }

}
export default rootReducer;