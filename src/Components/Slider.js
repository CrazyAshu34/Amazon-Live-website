import "./Css/Slider.css";
import Mybody from "./Mybody";

import ProductSlider from "./ProductSlider";
import slider1 from "../Components/Slider_img/slider1.jpg"
import slider2 from "../Components/Slider_img/slider2.jpg"
import slider3 from "../Components/Slider_img/slider3.jpg"
import slider4 from "../Components/Slider_img/slider4.jpg"
import slider5 from "../Components/Slider_img/slider5.jpg"
import slider6 from "../Components/Slider_img/slider6.jpg"
import slider7 from "../Components/Slider_img/slider7.jpg"
import slider8 from "../Components/Slider_img/slider8.jpg"
import slider9 from "../Components/Slider_img/slider9.jpg"

import { useState, useEffect } from "react";


export default function Body() {
    const [currentValue, setcurrentValue] = useState(0);
    const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9]

    function handlePrev() {
        if (currentValue === 0) {
            setcurrentValue(images.length - 1);
        } else {
            setcurrentValue(currentValue - 1);
        }
    }


    function handleNext() {
        setcurrentValue((prevValue) => {
            if (prevValue < images.length - 1) {
                return prevValue + 1;
            } else {
                return 0;
            }
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentValue((prevValue) => {
                if (prevValue < images.length - 1) {
                    return prevValue + 1;
                } else {
                    return 0;
                }
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);



    return (<div>
        <div className="mycenter">
            <div className="slider-container">
                <img className="slider-image" src={images[currentValue]} alt="myslider" />
                <div className="overlay"></div>
                <div className="slider-button-container">
                    <button className="slider-button" onClick={handlePrev}>{'<'}</button>
                    <button className="slider-button" onClick={handleNext}>{'>'}</button>
                </div>
            </div>
        </div> <div className = "my-bg-color" > { /* My other Body elements  */ }
        <Mybody />
         <ProductSlider/>
        </div> </div>);

}