import React from "react";

const CareTipCard = (props) => {
    const {article,_id} = props;
    return (
        <div>
            <div class="card">
                <img src={article.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{article.title}</h5>
                    <p class="card-text">{article.text}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Read more</small>
                </div>
            </div>
        </div>
    );
};

export default CareTipCard;