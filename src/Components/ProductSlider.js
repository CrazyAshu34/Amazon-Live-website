import { useState } from 'react';
import "./Css/Product_slider.css"
import mobile1 from "../Components/Slider2_img/mobile1.jpeg"
import mobile2 from "../Components/Slider2_img/mobile2.jpeg"
import mobile3 from "../Components/Slider2_img/mobile3.jpeg"
import mobile4 from "../Components/Slider2_img/mobile4.jpeg"
import mobile5 from "../Components/Slider2_img/mobile5.jpeg"
import mobile6 from "../Components/Slider2_img/mobile6.jpeg"
import mobile7 from "../Components/Slider2_img/mobile7.jpeg"
import mobile8 from "../Components/Slider2_img/mobile8.jpeg"
import mobile9 from "../Components/Slider2_img/mobile9.jpeg"
import mobile10 from "../Components/Slider2_img/mobile10.jpeg"

function ProductSlider() {

    const [startIndex, setStartIndex] = useState(0);
    const images = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7, mobile8, mobile9, mobile10]



    function handlePrev() {
        if (startIndex === 0) {
            return;
        }
        setStartIndex(startIndex - 5 < 0 ? 0 : startIndex - 5);
    }

    function handleNext() {
        if (startIndex + 5 >= images.length) {
            return;
        }
        setStartIndex(startIndex + 5);
    }

    {
        images.slice(startIndex, startIndex + 5).map((image, index) => (
            <img key={index} className="myimage" src={image} alt={`slider-${index}`} />
        ))
    }

    return (
        <div className="slider">
            <div className='image-container'>
                {images.slice(startIndex, startIndex + 5).map((image, index) => {
                    return (<img className="myimage" key={index} src={image} alt={`slider-${index}`} />)
                })}
            </div>
            <div className="button-container">
                <button className="prev" onClick={handlePrev}>{'<'}</button>
                <button className="next" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    );

}

export default ProductSlider;