import Axios from "axios";

export const CarouselList = () => {return async (dispatch) => {
    const { data } = await Axios.get("http://localhost:5000/banners");
   //debugger;
    dispatch({
        type: 'FETCH_CAROUSELDATA',
        payload: data
    })
}
}