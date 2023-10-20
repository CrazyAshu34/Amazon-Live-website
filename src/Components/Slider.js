import "./Slider.css";
import { useEffect, useState } from "react";
import Slider1 from "../Components/Slider/slider1.jpg";
import Slider2 from "../Components/Slider/slider2.jpg";
import Slider3 from "../Components/Slider/slider3.jpg";
import Slider4 from "../Components/Slider/slider4.jpg";
import Slider5 from "../Components/Slider/slider5.jpg";

export default function Body() {
    const [currentValue, setcurrentValue] = useState(0);
    const images = [Slider1, Slider2, Slider3, Slider4, Slider5];

    function handlePrev() {
        if (currentValue === 0) {
            setcurrentValue(images.length - 1);
        } else {
            setcurrentValue(currentValue - 1);
        }
    }

    function handleNext() {
        if (currentValue < images.length - 1) {
            setcurrentValue(currentValue + 1);
        } else {
            setcurrentValue(0);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentValue]);


    return (<>
        <div className="slider-container">
            <img className="slider-image" src={images[currentValue]} alt="slider" />
            <div className="slider-button-container">
                <button className="slider-button" onClick={handlePrev}>{'<'}</button>
                <button className="slider-button" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    </>);

}
