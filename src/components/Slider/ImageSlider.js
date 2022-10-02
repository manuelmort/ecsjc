import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsFileSlides } from "react-icons/bs"
import "./ImageSlider.css"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <section className='slider' style={{maxHeight:"600px"}}>
        <BsArrowLeftCircleFill className='left-arrow bg-transparent' onClick={prevSlide}/>
        <BsArrowRightCircleFill className='right-arrow bg-transparent' onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image shadow-lg' style={{maxHeight:"500px"}} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

