import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/Acton/product.action';

function CartDetails(props) {

  const dispatch = useDispatch();
const product = useSelector(state => state.product);
const [ViewCart , setViewCart] = useState([])
const Cartproduct = useSelector(state => state.cartpro);
const productdata = product.product;
const CartProData = Cartproduct.cart;
console.log();

console.log(CartProData,productdata);

const Procart = [];

productdata.map((j) =>{
    CartProData.map((s) =>{
        if (j.id === s.id) {
            Procart.push(j)
        }
    })
})

console.log(Procart);






useEffect(() =>{
dispatch(getProduct());
}, [])


return (
    <div className='cart-box'>
        <div className='container'>
            <div className='row text-center'>
                <div className='col-4'>
                    Image
                </div>
                <div className='col-4'>
                    Detail
                </div>
                <div className='col-4'>
                    Count
                </div>
            </div>
        </div>
        
    </div>
);
}



export default CartDetails;