import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import useServices from "../../hooks/useServices";

const Service = () => {
    const services = useServices();
    const { serviceId } = useParams();
    const service = services[serviceId];
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-6 mx-auto border rounded p-2">
                        <h5>{service.service_title}</h5>
                        <p>Cost: {service.service_cost}</p>
                        <p>{service.service_summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;