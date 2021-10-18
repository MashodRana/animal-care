import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css"
const ServiceCard = (props) => {
    const { title, _id, image } = props;
    return (
        <>
            <div className="demo-service col-3 m-2 p-2 border rounded text-center">
                <div>
                    <img src={image} alt="" />
                </div>
                <h5>{title}</h5>
                {/* <button className="btn btn-warning">Details</button> */}
                <Link className="btn btn-warning" to={`services/${_id}`}>View details</Link>
            </div>
        </>
    );
};

export default ServiceCard;