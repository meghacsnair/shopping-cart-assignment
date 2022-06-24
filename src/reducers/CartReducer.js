const initialState=[];
const CartReducer =(state=initialState,action)=>{
    switch (action.type){
        
        case "ADD_TO_CART": {
            //debugger;
            let tempState = [...state];
            let index = tempState.findIndex(arr=>arr.id===action.payload.id)
            if(index>-1){
                tempState[index]["cartQty"] =  tempState[index].cartQty+1;
            }else{
                action.payload["cartQty"]=1;
                tempState.push(action.payload)
            }
           
            return tempState;
        }
       
        case "REMOVE_FROM_CART": {
            let tempState = [...state];
            let index = tempState.findIndex(arr=>arr.id===action.item.id)
            if(tempState[index].cartQty>1){
                tempState[index].cartQty =  tempState[index].cartQty-1;
            }else{
               tempState.splice(index,1);
            }
          
            return tempState;
        }
       
        default:return [...state]
    }
}
export default CartReducer;