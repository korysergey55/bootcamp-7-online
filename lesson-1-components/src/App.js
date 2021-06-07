import products from './mock-products';

// import Product from "./components/Product/Product";
import ProductsList from "./components/ProductsList/ProductsList";

// console.log(products);
// export  class Hello {
//     todos = []
//     add() {
//         this.todos.push({ hello: 'js' })
//     }
// }


// const Foo = () => {
//     return (
//         <p>Bar</p>
//     )
// }

const App = () => {
    // console.log(
    //     products.map(item => (
    //         <Product
    //             image="https://"
    //             price={450}
    //             title="Burger Mexico"
    //             currency="uah"
    //             description="Product2"/>
    //     ))
    // )
    const filteredProducts = products.filter(item => item.productViews > 30);
    return (
        <div className="container">
            <p>Hello</p>
            <strong>React!</strong>
            {/*<Product image="https://" price={550} title="Burger" currency="uah" description="Product1"/>*/}


            <h3>All</h3>
            <ProductsList products={products}/>
            <hr/>
            <h3>Popular</h3>
            <ProductsList />

            {/*{products.map(item => (*/}
            {/*    <li key={item._id}>{item.name.en}</li>*/}
            {/*))}*/}

            {/*<FormattedPrice price={99} />*/}
        </div>
    )
}

export default App;