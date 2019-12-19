import React, { useEffect, useState } from "react";

export default {
    useFetch(url) {
        const [data, setDataState] = useState(null);
        const [loading, setLoadingState] = useState(true);
        useEffect(
            () => {
            setLoadingState(true);
            fetch(url)
                .then(j => j.json())
                .then(data => {
                setDataState(data);
                setLoadingState(false);
                });
            },
            [url]
        );
        return { data, loading };
    }
}