const initialState= [];

const ProductReducer = (state=initialState,action) =>{
    switch(action.type){
            case "FETCH_PRODUCTS": return action.payload;
            default: return [...state]
            
    }
}
export default ProductReducer;