import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

function SortByPrice({setPriceOrder}) {

    const [value, setValue] = useState('');
    const [searchParams] = useSearchParams('');

    useEffect(() => {
        setPriceOrder(value);
    }, [value])

    useEffect(() => {
        setValue(searchParams.get('order') || '');
    }, [])

    function handleSelect(event) {
        setValue(event.target.value)
    }

    return (
        <div>
            <label htmlFor="sortByPrice">Sortowanie po cenie</label>
            <select id="sortByPrice" value={value} onChange={handleSelect}>
                <option value="">---</option>
                <option value="ascending">rosnąco</option>
                <option value="descending">malejąco</option>
            </select>
        </div>
    );
}

export default SortByPrice;