import { useState } from "react";
import { useNavigate } from "react-router";
import '../css/Input.css';
const SignUp = ()=>{
    const [inputState,setInputState]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cnfmpwd:""
    })
    const {
        firstname,
        lastname,
        email,
        password,
        cnfmpwd
    } = inputState;
 const [error,setError] = useState("");
 const history = useNavigate();
    const handleInputchange = (e) =>{
        const inputname = e.target.name;
        let tempState = {...inputState};
        tempState[inputname]=e.target.value;
        setInputState(tempState)
        setError("")
    }
    const handleSignUp =(e)=>{
        e.preventDefault();
        debugger;
        if (emailValidation() && passwordValidation() && confirmPasswordCheck()) {
           
        
           localStorage.setItem("signedup","true")
            history('/')

        } else if (firstname === '' || lastname === '' || email === '' || password === '' || cnfmpwd === '') {
            setError('Fields cannot be empty')
        }
        else {
            alert('Cannot submit the form due to invalid email & password')
        }
    }
    
    const emailValidation = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email || regex.test(email) === false) {
            setError("Email is not valid")
            return false;
        }
        return true;
    }

    const passwordValidation = () => {
        const pswdregex = /\s/;

        if (password) {
            if (password.length < 6) {
                setError('Password length is too short');
                return false;
            } else if (password.search(/\d/) == -1) {
                setError('Password must contain atleast one numeric digit');
                return false;
            } else if (password.search(/[a-zA-Z]/) == -1) {
                setError('Password must contain atleast one alphabet');
                return false;
            } else if (pswdregex.test(password)) {
                setError('Your Password contains white space');
                return false;
            }

            return true
        } else {
            setError('Password field is mandatory');
            return false;
        }

    }

    const confirmPasswordCheck = () => {
        if (password === cnfmpwd) {
            return true;
        }
        setError('Password is not same')
        return false;
    }
    return (<div className="signup" >
  <div>
  <h1>Sign Up</h1>
  <p>We dont share your details with anyone</p>
  </div>
  <div>
  <form onSubmit={handleSignUp}>
  <div className="inputHolder">
  <label className="inputlabel">First Name</label>
  <input className="inputComponent" placeholder="First Name" required name="firstname" value={firstname} onChange={handleInputchange} type="text"/>
</div>
<div className="inputHolder">
  <label className="inputlabel">Last Name</label>
  <input className="inputComponent" placeholder="Last Name" required name="lastname" value={lastname} onChange={handleInputchange} type="text"/>
</div>
<div className="inputHolder">
  <label className="inputlabel">Email</label>
  <input className="inputComponent" placeholder="Email" required name="email" value={email} onChange={handleInputchange} type="email"/>
</div>
<div className="inputHolder">
  <label className="inputlabel">Password</label>
  <input className="inputComponent" placeholder="Password" required name="password" value={password} onChange={handleInputchange} type="password"/>
</div>
<div className="inputHolder">
  <label className="inputlabel">Confirm Password</label>
  <input className="inputComponent" placeholder="Confirm Password" required name="cnfmpwd" value={cnfmpwd} onChange={handleInputchange} type="password"/>
</div>
<p>{error}</p>
<button type="submit" onClick={handleSignUp}>Sign Up</button>
</form></div>
    </div>)
}
export default SignUp;