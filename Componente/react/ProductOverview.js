import React, {Component} from 'react';

class ProductOverview extends Component{
    render(){
        return(
            <div className="ProductOverview">
                <div className="title-holder">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="overview-holder>">
                    <div className="thumbnail-holder">
                        <img src={this.props.image} />
                    </div>
                    <div className="info-holder">
                        <p className="review-info">{this.props.review}</p>
                        <p className="product-lower-price">
                            Best price: {Math.min(this.props.link1[1], this.props.link2[1])}  
                        </p>
                    </div>
                    <div className="product-description">
                        <p>{this.props.desc}</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ProductOverview;