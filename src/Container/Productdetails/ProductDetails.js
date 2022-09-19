import React from 'react';

function ProductDetails(props) {
    const data = [props.location.state]
    return (
        <>
            {
                data.map((k) =>(
                    <div >
                        <div className='container'>
                           <div class="single-pro">
                             <div>
                            <img src={k.url}/>
                        </div>
                        <div className='pr-des'>
                            <h4>{k.product_name}</h4>
                            <p><strong>Price :</strong> {k.product_price}</p>
                            <p className='single-des'>
                                <span><strong>Description </strong> </span>
                                {k.product_description}
                            </p>
                            <div className="box Add-button">
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