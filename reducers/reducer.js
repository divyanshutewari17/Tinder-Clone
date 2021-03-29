const initialState={
    left:0,
    right:0
}

export const reducer = (state=initialState,action)=>{
    if(action.type=="LEFT"){
        return{
            ...state,
            left:action.payload
        }
    }
    if(action.type=="RIGHT"){
        return{
            ...state,
            right:action.payload
        }
    }
  
    return state
}