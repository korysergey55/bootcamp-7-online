import FormattedPrice from "../FormattedPrice/FormattedPrice";

const Product = (props) => {
    // console.log(props, 'props')
    const {title, price, currency, image, description} = props;
    return (
        <li>
            <img src={image} alt="some text"/>
            <h3>{title}</h3>
            <FormattedPrice price={price} currency={currency}/>
            <p>{description}</p>
        </li>
    );
};



export default Product;