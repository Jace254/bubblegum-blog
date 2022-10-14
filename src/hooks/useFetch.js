import { useEffect , useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        const abortCont = new AbortController()

        setTimeout( () => {
            fetch(url, { signal: abortCont.signal })
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
                    if (err.name !== "AbortError") {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000);

        return () => abortCont.abort()
    }, [url]);

    return { data, error, isPending }
}

export default useFetch;