import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

function Search({setQuery}) {
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setQuery(value);
        setSearchParams({query: value});
    }, [value])

    useEffect(() => {
        setValue(searchParams.get('query'));
    }, [])

    function handleInput(event){
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text"
                   value={value}
                   placeholder="Wyszukaj produkt"
                   onChange={handleInput}
            />
        </div>
    );
}

export default Search;