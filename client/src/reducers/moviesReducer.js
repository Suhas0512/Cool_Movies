const moviesInintial=[]

const moviesReducer=(state=moviesInintial,action)=>{
    switch(action.type){
        case 'ADD_MOVIES':{
            return[...state,{...action.payload}]
        }
        case 'REMOVE_MOVIES':{
            return state.filter(dept=>dept._id!=action.payload)
        }
        case 'SET_MOVIES':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default moviesReducer