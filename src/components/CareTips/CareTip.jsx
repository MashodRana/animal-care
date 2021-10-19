import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import useCareTips from "../../hooks/useCareTips";
import CareTipCard from "./CareTipCard";

import './CareTips.css'

const CareTip = () => {

    const careTips = useCareTips();
    const {caretipId} = useParams();
    const tip = careTips[caretipId];

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col mx-auto">
                    <div>
                        <img style={{height:'200px', width:'200px'}} src={tip && tip.image} alt="" />
                    </div>
                    {console.log(careTips)}
                    {console.log(tip)}
                        <h5>{tip && tip.title}</h5>
                        <p>{tip && tip.author}</p>
                        <p>{tip && tip.text}</p>
                        <p>Read original article <a href={tip && tip.link}>here</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareTip;