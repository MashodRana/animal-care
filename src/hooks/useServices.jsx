import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "https://mashodrana.github.io/json-data/services.json";
        // const url = 'services.json'
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return services;
};

export default useServices;