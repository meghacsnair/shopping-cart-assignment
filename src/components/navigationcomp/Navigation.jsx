import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.png';
import { Outlet } from 'react-router';
import React from 'react';
import  './Navigation.css';
import { useSelector } from "react-redux";
const Navigation = (props) =>{
    const cartitems = useSelector(state=>state.cartItems);
    const cartlength = cartitems.reduce((count,crt)=>{return count+=crt.cartQty},0);
    const handleCartVisibility = () =>{
       // debugger;
        props.hideShowCart(!props.cartVisibility)
    }
    return (<React.Fragment>
        <div className='nav-bar'>
       <div className='widthNav'>
       <NavLink to="/" className='navlink'><img src={logo} alt="logo"/></NavLink>
       <div className='rightnav'>
       <NavLink to="/" activeclassname="active" className='navlink'>Home</NavLink>
       <NavLink to="/products/allProducts" activeclassname="active" className='navlink'>Products</NavLink>
       <div>
       <NavLink to="/login" activeclassname="active" className='navlink'>Sign in</NavLink>
       <NavLink to="/signup" activeclassname="active" className='navlink'>Register</NavLink>
       
       <button  className='navlink' onClick={handleCartVisibility}><img src="/static/images/cart.svg" alt="cart" style={{width:"2rem"}}/>{cartlength} items</button></div>
       </div></div>
        </div>
        <div className='navPage'>
        <Outlet /></div>
        <footer>Copyright 2011-2018 Sabka bazaar Grocery shopping pvt Ltd</footer>
        
    </React.Fragment>)
}
export default Navigation;