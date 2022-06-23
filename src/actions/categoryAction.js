import Axios from "axios";

export const CategoryList = () => {return async (dispatch) => {
    const { data } = await Axios.get("http://localhost:5000/categories");
   //debugger;
    dispatch({
        type: 'FETCH_CATEGORYDATA',
        payload: data
    })
}
}