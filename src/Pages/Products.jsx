import { useParams } from "react-router";
import ProductCategory from "../components/productsidenav/ProductCategory";

const Products = () =>{
    const param = useParams();
    
    return <ProductCategory/>
}
export default Products;