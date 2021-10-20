import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // const url = "https://mashodrana.github.io/json-data-api/services.json";
        const url = "https://gist.githubusercontent.com/MashodRana/587c6b6ae8ff08ad61bc497c6f5f74bc/raw/f79ad43df3c3bc15ed72ff2439de429fc8382396/animal_care_services.json";
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