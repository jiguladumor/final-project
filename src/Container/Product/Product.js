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



function Product(props) {

    
    const catagory = useSelector(state => state.doctors);
    
    console.log(catagory.doctor);

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);
    const [showCatagory , setshowCatagory] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

useEffect(() =>{
   dispatch(getdocdata());
   setshowCatagory(catagory.doctor)
},[])

    const handleSubmit = () => {


        // let data = {
        //     id: Math.floor(Math.random() * 1000),
        //     name,
        //     brand,
        //     manufacturer,
        //     price
        // }

        // let localdata = JSON.parse(localStorage.getItem("product"));
        // console.log(localdata);

        // if (prodata == null) {
        //     localStorage.setItem("product", JSON.stringify([data]));
        // } else {
        //     prodata.push(data);
        //     localStorage.setItem("product", JSON.stringify(prodata));
        // }


        // console.log(prodata); 
    }








    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product name', width: 130 },
        { field: 'brand', headerName: 'Product Brand', width: 130 },
        { field: 'manufacturer', headerName: 'Manufacturer', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },

    ];







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
                    {
                        showCatagory.map((c) =>{
                            return(
                            <div className='cat-view-box'>
                            
                                <div className='box-img'>
                                    <img src={c.url}/>
                                </div>
                                <h4 className='cat-box-title'>{c.catagory_name}</h4>
                            </div>
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
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <div className="option_container">
                                    <div className="options">
                                        <a href className="option1">
                                            Men's Shirt
                                        </a>
                                        <a href className="option2">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                                <div className="img-box">
                                    <img src="images/p1.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $75
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p2.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $80
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p3.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $68
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p4.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $70
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p5.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $75
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p6.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $58
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p7.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $80
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p8.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p9.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p10.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p11.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
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
                                <div className="img-box">
                                    <img src="images/p12.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href>
                            View All products
                        </a>
                    </div>

                    <div>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Add Product
                        </Button>

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                        <div>

                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Add Product</DialogTitle>
                                <DialogContent>

                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Product Name"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="brant"
                                        label="Product Brand"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="manufacturer"
                                        label="Manufacturer"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => setManufacturer(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="Price"
                                        label="Price"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleSubmit()}>Submit</Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                    </div>

                </div>
            </section>



        </div>

    );
}

export default Product;