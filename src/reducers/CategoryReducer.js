const initialState =[];

const CategoryReducer = (state=initialState,action)=>{
    //debugger;
    switch(action.type){
        
        case "FETCH_CATEGORYDATA": return action.payload;
        default: return [...state]
    }
     

}
export default CategoryReducer;