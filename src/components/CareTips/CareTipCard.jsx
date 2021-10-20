import React from "react";
import { Link } from "react-router-dom";

const CareTipCard = (props) => {
    const {article,_id} = props;
    return (
        <div>
            <div class="card custom-card m-2">
                <img src={article.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{article.title}</h5>
                    <p class="card-text">{article.text}</p>
                </div>
                <div class="card-footer border-0 bg-transparent">
                    <small> <Link  style={{color:'goldenrod'}} to={`caretips/${_id}`}>Read more</Link> </small>
                </div>
            </div>
        </div>
    );
};

export default CareTipCard;