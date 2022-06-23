import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";

const ProductItem =(props)=>{
    const dispatch = useDispatch();
    const addToCarthandler = () =>{
        
        dispatch(addToCart(props.product))
    }
    return (<div className="product-card">
        <p>{props.product.name}</p>
        <img src={props.product.imageURL} alt={props.product.name}/>
        
        <p className="prodDesc">{props.product.description}</p>
        <div className="buyOut"><span>{`MRP Rs.${props.product.price}`}</span><button onClick={addToCarthandler}>Buy Now</button></div>
    </div>)
}
export default ProductItem;