import {useEffect, useState} from "react";

function Search({setQuery}) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setQuery(value);
    }, [value])

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