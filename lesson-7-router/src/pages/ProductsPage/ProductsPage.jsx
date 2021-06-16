import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ProductsPage extends Component {
    state = {
        products: []
    }


    componentDidMount() {
        axios.get(`https://amz-app.herokuapp.com/api/v1/products`)
            .then(({data}) => this.setState({products: data.result}))
    }


    render() {
        const {products} = this.state;
        return (
            <div>
                <h3>Products Page</h3>
                <ul>
                    {products.map(item => (
                        <li key={item._id}>
                            <Link className="bg-blue-500 hover:bg-blue-700"
                                  to={`/products/${item._id}`}
                            >
                                {item?.name?.ukr}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductsPage;