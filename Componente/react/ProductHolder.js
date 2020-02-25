import React, {Component} from 'react';
import produse from './produse';
import ProductOverview from './ProductOverview';

class ProductHolder extends Component{
    render(){
        return(
            <section className="ProductHolder">
               {produse.map(prod => <ProductOverview title={prod.titlu} image={prod.imagine} desc={prod.descriere} link1={prod.link1} link2={prod.link2}/>)}
            </section>
        );
    }
}

export default ProductHolder;