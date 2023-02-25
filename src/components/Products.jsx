import {useEffect, useState} from "react";

const productList = [
    {
        "id": 1,
        "name": "Pomidor czerwony",
        "description": " ",
        "price": 3.19,
        "category": "warzywa",
        "subcategories": "pomidory",
        "image": "",
        "comments": []
    },
    {
        "id": 2,
        "name": "Pomidor żółty",
        "description": " ",
        "price": 4.50,
        "category": "warzywa",
        "subcategories": "pomidory",
        "image": "",
        "comments": []
    },
    {
        "id": 3,
        "name": "Pomidor malinowy",
        "description": " ",
        "price": 5,
        "category": "warzywa",
        "subcategories": "pomidory",
        "image": "",
        "comments": []
    }
]

function Products() {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        setListOfProducts(productList)
    }, [])

    return (
        <div>
            Products
        </div>
    );
}

export default Products;