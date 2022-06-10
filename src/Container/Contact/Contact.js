import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import * as yup from 'yup';
import {  Formik,Form, useFormik } from 'formik';

function Contact(props) {

const [Usertype,setUserType]  = useState('ContactUs')


let schema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().email("please enter valid email").required("please enter email"),
    number: yup.number().required("please enter number")
  });

const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        number: ''
    },
    validationSchema:schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  
console.log(formik.errors.email);

    return (
     <div>
            <section className="inner_page_head">
                <div className="container_fuild">
                <div className="row">
                    <div className="col-md-12">
                    <div className="full">
                        <h3>Contact us</h3>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* end inner page section */}
            {/* why section */}
            <section className="why_section layout_padding">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="full">
                        {/* <form action="index.html">
                        <fieldset>
                            <input type="text" placeholder="Enter your full name" name="name" required />
                            <input type="email" placeholder="Enter your email address" name="email" required />
                            <input type="text" placeholder="Enter subject" name="subject" required />
                            <textarea placeholder="Enter your message" required defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                        </fieldset>
                        </form> */}
                        <Formik values={formik}>
                        <Form>
                            <FormGroup>
                            {/* <Label for="exampleName">Name</Label> */}
                            <Input type="text" name="name" id="exampleName" placeholder="Name" onChange={formik.handleChange}/>
                            {
                                formik.errors.name ? <p>{formik.errors.name}</p>
                                :
                                null
                            }
                            </FormGroup>
                            <FormGroup>
                            {/* <Label for="exampleEmail">Email</Label> */}
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email"  onChange={formik.handleChange} />
                            {
                                formik.errors.email ? <p>{formik.errors.email}</p>
                                :
                                null
                            } 
                            </FormGroup>
                            <FormGroup>
                            {/* <Label for="exampleSubject">Subject</Label> */}
                            <Input type="number" name="phone" id="exampleSubject" placeholder="Mobile Number"  onChange={formik.handleChange} />
                            {
                                formik.errors.number ? <p>{formik.errors.number}</p>
                                :
                                null
                            } 
                            </FormGroup>
                            <FormGroup>
                            {/* <Label for="exampleText">Text Area</Label> */}
                            <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
                            </FormGroup>
                            <div class="text-center"><Button className='F-login-btn border-0 ms-0 mt-3' type="button">Submit</Button></div>
                        </Form>
                    </Formik>


                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* end why section */}
            {/* arrival section */}
            <section className="arrival_section">
                <div className="container">
                <div className="box">
                    <div className="arrival_bg_box">
                    <img src="images/arrival-bg.png" alt />
                    </div>
                    <div className="row">
                    <div className="col-md-6 ml-auto">
                        <div className="heading_container remove_line_bt">
                        <h2>
                            #NewArrivals
                        </h2>
                        </div>
                        <p style={{marginTop: 20, marginBottom: 30}}>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                        </p>
                        <a href>
                        Shop Now
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </div>

    );
}

export default Contact;