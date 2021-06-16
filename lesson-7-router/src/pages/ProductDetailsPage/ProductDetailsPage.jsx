import React, {Component} from 'react';
import axios from 'axios';

class ProductDetailsPage extends Component {
    state = {
        product: null,
    }

    componentDidMount() {
        const {match} = this.props;
        const {id} = match.params;
        // console.log(id)
        axios.get(`https://amz-app.herokuapp.com/api/v1/products/${id}`)
            .then(({data}) => this.setState({product: data}))
    }


    render() {
        const {product} = this.state;

        if (!product) {
            return null;
        }

        const {name, thumbnail} = product;

        return (
            <div>
                <img src={thumbnail} alt={name.ukr}/>
                <h1>{name.ukr}</h1>
            </div>
        );
    }
}

export default ProductDetailsPage;