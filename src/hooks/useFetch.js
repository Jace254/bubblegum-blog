import { useEffect , useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setError(null)
                    setData(data)
                    setIsPending(false)
                })
                .catch(err => {
                    setIsPending(false)
                    console.log(err.message)
                    setError(err.message)
                })
        }, 1000);
    }, [url]);

    return { data, error, isPending }
}

export default useFetch;