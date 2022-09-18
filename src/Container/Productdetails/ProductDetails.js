import React from 'react';

function ProductDetails(props) {
    const data = [props.location.state]
    return (
        <>
            {
                data.map((k) =>(
                    <div>
                        <div className='container'>
                           <div class="single-pro">
                             <div>
                            <img src={k.url}/>
                        </div>
                        <div>
                            <h4>{k.product_name}</h4>
                            <p>price : {k.product_price}</p>
                            <p>Description: {k.product_description}</p>
                            <div className="box">
                                <div className="option_container">
                                        <div className="options">
                                                <button><a href className="option1">Add To Cart</a></button>
                                                <button> <a href  className="option2"> Buy Now </a></button>
                                        </div>                
                                </div>
                                </div>                                
                        </div>
                           </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ProductDetails;