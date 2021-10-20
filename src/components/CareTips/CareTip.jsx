import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCareTips from "../../hooks/useCareTips";

import './CareTips.css'

const CareTip = () => {

    // const careTips = useCareTips();
    const [careTips, setCareTips] = useState([]);
    const { caretipId } = useParams();
    const tip = careTips[caretipId];


    useEffect(() => {

        const url = "https://mashodrana.github.io/json-data/care_articles.json";
        // const url = "care_articles.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCareTips(data);
            })
    }, [])

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col mx-auto">
                        <div>
                            <img className="img-fluid" src={tip && tip.image} alt="" />
                        </div>
                        {console.log(careTips)}
                        {console.log(tip)}
                        <h5>{tip && tip.title}</h5>
                        <p>{tip && tip.author}</p>
                        <p>{tip && tip.text}</p>
                        <p>Read original article <a style={{color:'goldenrod'}} href={tip && tip.link}>here</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareTip;