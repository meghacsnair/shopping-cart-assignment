import { useSelector } from "react-redux";
import './Cart.css';
const Cart = (props) =>{
    const cartItems = useSelector(state=>state.cartItems);
    const cartlength = cartItems.reduce((count,crt)=>{return count+=crt.cartQty},0);
    const totalAmount = cartItems.reduce((total,crt)=>{return total+=crt.cartQty*crt.price},0);
    const visible = props.cartVisibility? "visibileCart":"";
    if(cartItems.length){
        return (
           <div className={`cartHolder ${visible}`}>
           <div className="cartDiv">
           <h1>My cart - {cartlength} items</h1>
           <ul>
            {cartItems.map((cart,i)=>{
                return (<li key={i}>
                    <div>
                    <img src={cart.imageURL} alt={cart.name}/>
                    </div>
                    <div>
                    <p className="cartName">{cart.name}</p>
                    <button>-</button>{cart.cartQty}<button>+</button> x <span style={{fontWeight:"600"}}>Rs.{cart.price}</span>
                    <span className="eachTotal">Rs.{cart.price * cart.cartQty}</span>
                    </div>
                </li>)
            })}
            </ul>
            <div class="lowestPrice"><img src="/static/images/lowest-price.png" alt="lowestprice"/>You wont find it cheaper anywhere</div>
            <button className="checkOut">Proceed to Checkout<span>{`Rs.${totalAmount}  >`}</span></button>
           </div> 
           </div>
          
        )
    }else{
        return <div>No items added</div>
    }
    
}
export default Cart;