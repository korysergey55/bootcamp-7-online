const FormattedPrice = ({price, currency}) => {
    // console.log(props, '[FormattedPrice]');
    // console.log(price, currency)
    return (
        <strong>{price} {currency}</strong>
    )
};


export default FormattedPrice;