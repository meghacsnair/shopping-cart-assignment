import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router";
import './ProductCategory.css';
import {NavLink} from 'react-router-dom';
import { useEffect } from "react";
import { CategoryList } from "../../actions/categoryAction";
const ProductCategory = ()=>{
   const categorylist = useSelector(state=>state.category);
    const dispatch = useDispatch();
    //const categories = useSelector(state => state.category);
    useEffect(() => {
        if(!categorylist.length)
            dispatch(CategoryList())
    }, [dispatch])
    return(
    <div>
      <div className="sideNav">
      {categorylist.map((ctg,i)=>{
        return <NavLink to={`/products/${ctg.id}`}key={i}><button>{ctg.name}</button></NavLink> })}</div> 
        <Outlet/>
        </div> 
    )
    
}
export default ProductCategory;