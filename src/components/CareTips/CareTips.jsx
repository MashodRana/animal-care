import React from "react";
import useCareTips from "../../hooks/useCareTips";
import CareTipCard from "./CareTipCard";

import './CareTips.css'

const CareTips = () => {

    const articles = useCareTips();

    return (
        <div>
            <div className="container">
                <div class="card-group">
                    {
                        articles && articles.map(article => <CareTipCard
                            key={article.id}
                            _id={article.id}
                            article={article}
                        ></CareTipCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CareTips;