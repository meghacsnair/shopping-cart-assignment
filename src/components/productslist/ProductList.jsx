import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//import { CategoryList } from "../../actions/categoryAction";
import { ProductListAction } from "../../actions/productListAction";
import ProductItem from "./ProductItem";
import './ProductList.css';
const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const selectedProducts = useParams().id;
    useEffect(() => {
        if (!products.length)
            dispatch(ProductListAction())
    }, [dispatch]);
    const filteredProducts = selectedProducts === "allProducts" ? products : products.filter(prod => prod.category === selectedProducts);
    if (filteredProducts.length) {
        return (<div className="product-list">{
            filteredProducts.map((prd, id) => {

                return <ProductItem key={id} product={prd}></ProductItem>


            })
        }</div>)
    } else {
        return <div>No items available for the selected category</div>
    }
}
export default ProductList;