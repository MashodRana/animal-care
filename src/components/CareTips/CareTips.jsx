import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CareTipCard from "./CareTipCard";

const CareTips = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('./articles.json')
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