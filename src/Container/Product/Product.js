import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { getdocdata } from '../../Redux/Acton/doctor.action';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/Acton/product.action';
// import allimg from "../../../public/images/1f6cd.png"



function Product(props) {

    
    const catagory = useSelector(state => state.doctors);
    const product = useSelector(state => state.product);
    
    console.log(catagory.doctor);
    console.log(product.product);

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);
    const [search , setSearch] = useState("All");

    console.log(search);

    const handleCatagory = (c) => {
//    setSearch({...search , catagory : c})

   let search = product.filter((f) => (
    f.id.toString().includes(f) ||
    f.product_list.toString().includes(f)   

))

console.log(search);

    };



useEffect(() =>{
   dispatch(getdocdata());
   dispatch(getProduct())

},[])

    // const handleSubmit = () => {


    // }









    return (
        <div>
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Product Grid</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='catagory-view'>
            <div className="container">
            <div className="row">
            <a href="#" onClick={(e) => handleCatagory("All")}>
                     <div className='cat-view-box'> 
                             <div className='box-img'>
                                <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f6cd.png" />
                             </div>
                               <h4 className='cat-box-title'>All</h4>
                             
                      </div>
                      </a>
                    {
                        catagory.doctor.map((c) =>{
                            return(
                            <a href="#" onClick={(e) => handleCatagory(c.catagory_name)}>
                                <div className='cat-view-box'>
                                
                                    <div className='box-img'>
                                        <img src={c.url}/>
                                    </div>
                                    <h4 className='cat-box-title'>{c.catagory_name}</h4>
                                </div>
                            </a>
                            )
                        })
                    }

            </div>

            </div>

            </section>

            {/* end inner page section */}
            {/* product section */}
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div>
                    <div className="row">
                     
                                    {
                                        product.product.map((e) =>(
                                            
                                 

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <div className="box">
                                                    <div className="option_container">
                                                        <div className="options">
                                                            <a href className="option1">
                                                                Add To Cart
                                                            </a>
                                                            <a href className="option2">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div  className="img-box">
                                                            <img  src={e.url}/>
                                                        </div>
                                                        <div className="detail-box">
                                                            <div className='pro-box-t'>
                                                                <h5 className='pro-name'>{e.product_name}</h5>
                                                                <h6>Price : {e.product_price}</h6>
                                                            </div>    
                                                                <p className='pro-type'>Catagory : {e.product_list}</p>
                                                                <p className='description-pro'>{e.product_description}</p>
                                                        </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                       
                    </div>
                    {/* <div className="btn-box">
                        <a href>
                            View All products
                        </a>
                    </div> */}

                    
                </div>
            </section>



        </div>

    );
}

export default Product;