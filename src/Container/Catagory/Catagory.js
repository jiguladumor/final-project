import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';

import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';


function Catagory(props) {


    const [open, setOpen] = useState(false);
    const [docopen, setDocopen] = useState(false);

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);

    const [email , setEmail] = useState('');
    const [sallery, setSallery] = useState('');
    const [post, setPost] = useState('');
    const [experience, setExperience] = useState('');
    const [datadoc , setDatadoc] = useState('');
    const [docdid , setDocdid] = useState('');
    const [update , setUpdate] = useState('');
    const [eid , setEid] = useState('');

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };



    // const handleSubmit = () => {


    //     let data = {
    //         id: Math.floor(Math.random() * 1000),
    //         name,
    //         brand,
    //         manufacturer,
    //         price
    //     }

    //     let localdata = JSON.parse(localStorage.getItem("product"));
    //     console.log(localdata);

    //     // if (prodata == null) {
    //     //     localStorage.setItem("product", JSON.stringify([data]));
    //     // } else {
    //     //     prodata.push(data);
    //     //     localStorage.setItem("product", JSON.stringify(prodata));
    //     // }


    //     // console.log(prodata); 
    // }








    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'name', headerName: 'Product name', width: 130 },
    //     { field: 'brand', headerName: 'Product Brand', width: 130 },
    //     { field: 'manufacturer', headerName: 'Manufacturer', width: 130 },
    //     { field: 'price', headerName: 'Price', width: 130 },

    // ];


// ====================================================

const handleClickOpen = () => {
    setOpen(true);
};

const handleDClickOpen = (id) => {
    setDocopen(true);
    setDocdid(id);
  
};


const handleClickEditOpen = (params) => {
    console.log(params.row);
    setOpen(true);

    formik.setValues({
        ...params.row,
        file:params.row.url
    })
    
    setEid(params.id);
    setUpdate(true);
};

const handleClose = () => {
    setOpen(false);
    setDocopen(false);
    

};

let schema = yup.object().shape({
    catagory_name: yup.string().required("Please enter name"),
    catagory_price: yup.string().required("Please enter Price"),
    file : yup.mixed().required("please upload file")

});

const formik = useFormik({
    initialValues: {
        catagory_name: '',
        catagory_price: '',
        file : ''
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {

        if (update) {
            handleEdit(values)   
        }else{

        //   alert(JSON.stringify(values, null, 2));
        // const {
        //     name,
        //     email,
        //     sallery,
        //     post,
        //     experience
        // } = values;

        // const docdata = {
        //     id: Math.floor(Math.random() * 1000),
        //     name,
        //     email,
        //     sallery,
        //     post,
        //     experience
        // }

        // let newdata = JSON.parse(localStorage.getItem("doctor"));
        // console.log(newdata);

        // if (newdata == null) {
        //     localStorage.setItem('doctor', JSON.stringify([docdata]));
        // } else {
        //     newdata.push(docdata)
        //     localStorage.setItem('doctor', JSON.stringify(newdata));
        // }


        // console.log(values);


        // dispatch(addDoctordata(values))

        handleClose();
        getData();
        // console.log(data);
        resetForm();
    }
  
    },
    
   
});


const handleEdit = (values) =>{
    console.log(values)

    // let eData = JSON.parse(localStorage.getItem("doctor"));
    // console.log(eData);

    // let editData = eData.map((u) => {
    //     if (u.id == eid) {
    //         return(
    //             {id: eid , ...values}
    //         )
    //     }else{
    //         return u;
    //     }
    // });

    // localStorage.setItem("doctor", JSON.stringify(editData));

    // dispatch(updateDoctordata(values))
    
    getData();
    setOpen(false);
    setUpdate(false);
    setEid();

}


const getData = () => {
    // let getDocData =JSON.parse( localStorage.getItem('doctor'));

    // if(getDocData !== null){
        // setDatadoc(doctor.doctor);
    // }
    // setDatadoc(doctor.doctors);
}



useEffect (
    () =>{
        // dispatch(getdocdata())
        getData();
    },
[])

const handleDelete = () => {
    // let deldata = JSON.parse(localStorage.getItem("doctor"));

    // let filterdata = deldata.filter((r, i) => r.id !== docdid);

    // localStorage.setItem("doctor", JSON.stringify(filterdata));

    // dispatch(deletDoctordata(docdid))

    getData();
    setDocopen(false);

}


const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'catagory_name', headerName: 'Name', width: 130 },
    { field: 'catagory_price', headerName: 'Price', width: 130 },
    { field: 'file', headerName: 'Image', width: 130,
        renderCell: (params) => (
            <img src={params.row.url} width="100" height={100} />
        )
    },
    { field: 'action', 
    headerName: 'Action',
     width: 130,
     renderCell : (params) =>{
        return (
            <>
            
            <Button startIcon={<DeleteIcon />} onClick={() =>handleDClickOpen(params.row)}></Button>
            
            <IconButton aria-label="edit" onClick={()=>handleClickEditOpen(params)}>
            <ModeEditIcon />
          </IconButton>
            </>
           
        )
     }
    },

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
            {/* end inner page section */}
            {/* product section */}
            <section className="product_section layout_padding">
                <div className="container">
                    <div className='row'>
                        <div className='col-6'>
                            <div className="heading_container heading_center">
                            <h2>
                                <span>Catagory</span>
                            </h2>
                            </div>
                        </div>
                   
                    <div className='col-6'>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Add Product
                        </Button>
                        </div>
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
                <DialogTitle>Empoyee Data</DialogTitle>
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="catagory_name"
                                name="catagory_name"
                                value={formik.values.catagory_name}
                                label="Catagory Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {
                                formik.errors.catagory_name ? <p>{formik.errors.catagory_name}</p> : null
                            }

                            <TextField
                                autoFocus
                                margin="dense"
                                id="catagory_price"
                                name="catagory_price"
                                value={formik.values.catagory_price}
                                label="Catagory price"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                             {
                                formik.errors.catagory_price ? <p>{formik.errors.catagory_price}</p> : null
                            }

                            <input
                                autoFocus
                                margin="dense"
                                type="file"
                                id="file"
                                name="file"
                                label="Upload File"
                                fullWidth
                                variant="standard"
                                onChange={(e) => formik.setFieldValue('file',  e.target.files[0])}

                            />
                                 {
                                formik.errors.file ? <p>{formik.errors.file}</p> : null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
                        </div>

                    </div>

                </div>
            </section>



        </div>

    );
}

export default Catagory;







