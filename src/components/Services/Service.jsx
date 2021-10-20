import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../hooks/useServices";

const Service = () => {
    const [services, setServices] = useState([]);
    // const services= useServices();

    const { serviceId } = useParams();
    const service = services[serviceId];

    useEffect(() => {
        const url = "https://mashodrana.github.io/json-data-api/services.json";
        // const url = 'services.json'
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-6 mx-auto border rounded p-2">
                        <h5>{service && service.service_title}</h5>
                        <p>Cost: {service && service.service_cost}</p>
                        <p>{service && service.service_summary}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;