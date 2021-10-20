import React, { useEffect, useState } from "react";
import useCareTips from "../../hooks/useCareTips";
import CareTipCard from "./CareTipCard";

import './CareTips.css'

const CareTips = () => {

    // const articles = useCareTips();
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const url = "https://mashodrana.github.io/json-data/care_articles.json";
        // const url = "care_articles.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArticles(data);
            })
    }, [])

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