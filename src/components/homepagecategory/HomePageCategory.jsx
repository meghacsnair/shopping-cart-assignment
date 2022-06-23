import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryList } from "../../actions/categoryAction";
import './HomePageCategory.css';
import {NavLink} from 'react-router-dom';
const HomePageCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);
    useEffect(() => {
        if(!categories.length)
            dispatch(CategoryList())
    }, [dispatch])
   // console.log(categories)
    return (
        <div>

            {categories.filter(ctegory=>ctegory.order>-1).map((ctg, i) => {
                if (ctg.order > -1) {
                    if (i % 2 === 0) {
                        return (<li key={i} className="row homeCategory">
                            <div className="col-md-6">
                                <img src={ctg.imageUrl} className="categoryImg" alt="Beverages" />
                            </div>
                            <div className="col-md-6">
                                <p>{ctg.name}</p>
                                <p>{ctg.description}</p>
                                <NavLink to={`/products/${ctg.id}`}><button>{`Explore ${ctg.name}`}</button></NavLink> 
                            </div>
                        </li>)
                    } else {
                        return (<li key={i} className="row homeCategory">
                            <div className="col-md-6">
                                <p>{ctg.name}</p>
                                <p>{ctg.description}</p>
                                <button>{`Explore ${ctg.name}`}</button>
                            </div>
                            <div className="col-md-6">
                                <img src={ctg.imageUrl} className="categoryImg" alt="Beverages" />
                            </div>

                        </li>)
                    }
                }
            })}
        </div>
    )
}
export default HomePageCategory;