import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router";
import './ProductCategory.css';
import {NavLink} from 'react-router-dom';
import { useEffect } from "react";
import { CategoryList } from "../../actions/categoryAction";
//import { useParams } from "react-router";
const ProductCategory = ()=>{
   const categorylist = useSelector(state=>state.category);
    const dispatch = useDispatch();
    const highlight = useParams().id;
    //const categories = useSelector(state => state.category);
    useEffect(() => {
        if(!categorylist.length)
            dispatch(CategoryList())
    }, [dispatch])
    return(
    <div>
      <div className="sideNav">
      {categorylist.map((ctg,i)=>{
        const activeTab = highlight === ctg.id ? "active":"";
        return <NavLink to={`/products/${ctg.id}`}key={i}><button className={activeTab} >{ctg.name}</button></NavLink> })}</div> 
        <Outlet/>
        </div> 
    )
    
}
export default ProductCategory;