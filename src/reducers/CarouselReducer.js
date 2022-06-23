const initialState = [];

const CarouselReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case 'FETCH_CAROUSELDATA': return action.payload
        default: return [...state]
    }
}


export default CarouselReducer;
 