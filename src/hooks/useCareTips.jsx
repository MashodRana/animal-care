import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


const useCareTips = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const url = "https://mashodrana.github.io/json-data-api/articles.json";
        // const url = "care_articles.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArticles(data);
            })
    }, [])

    return articles;
};

export default useCareTips;