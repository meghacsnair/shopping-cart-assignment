
import React, {useEffect, useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import {CarouselList} from '../../actions/carouselAction';
import { useDispatch, useSelector } from 'react-redux';

import './CarouselContainer.css';
function CarouselContainer() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.carousel)
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    useEffect(()=>{
        if(!data.length)
          dispatch(CarouselList())
    },[dispatch])
  //console.log(data)
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>        
        <img className=""
          src={slide.bannerImageUrl}
          alt={slide.bannerImageAlt}
        />
       
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default CarouselContainer;
