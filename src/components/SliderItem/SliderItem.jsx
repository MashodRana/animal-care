import React from "react";
import './SliderItem.css'

const SliderItem = (props) => {
    const { name, image, review } = props.review;
    return (
        <div class="carousel-item">
            <div className="row mx-auto">
                <div className="col-4">
                    <img src={image} alt="..." />
                </div>
                <div className="col-5">
                    <p>{review}</p>
                    <h6>{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;