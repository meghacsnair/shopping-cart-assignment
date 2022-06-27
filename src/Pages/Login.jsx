import { useNavigate } from "react-router";
import '../css/Input.css';
const Login = () =>{
    const history=useNavigate();
    return (<div className="signup" >
    <div>
    <h1>Login</h1>
    <p>Get access to your orders,wishlist and recommendations</p>
    </div>
    <div>
    <form>
  
  <div className="inputHolder">
    <label className="inputlabel">Email</label>
    <input className="inputComponent" placeholder="Email" required name="email"  type="email"/>
  </div>
  <div className="inputHolder">
    <label className="inputlabel">Password</label>
    <input className="inputComponent" placeholder="Password" required name="password"  type="password"/>
  </div>
 

  <button type="submit" onClick={()=>{history("/")}}>Login</button>
  </form></div>
      </div>)
}
export default Login;