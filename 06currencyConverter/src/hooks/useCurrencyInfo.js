 
import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // we want that when this hook will loded or used then this hook will be called 
    // for this kind of approach we use useEffect hook
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp)=> resp.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return data

}

export default useCurrencyInfo;

