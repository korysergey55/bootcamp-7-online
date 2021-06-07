import React from 'react';
import Product from "../Product/Product";

const ProductsList = (props) => {
    const {products} = props;
    return (
        <ul>
            {products && products.map(({thumbnail, price, name, description, _id}) => (
                <Product
                    key={_id}
                    image={thumbnail}
                    price={price}
                    title={name.en}
                    currency="uah"
                    description={description.en}/>
            ))}
        </ul>
    );
};

export default ProductsList;