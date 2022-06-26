import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr></hr>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr></hr>
                       <div><Link to="/" className='text-decoration-none'>Home</Link></div>
                       <div><Link to="/about" className='text-decoration-none'>About us</Link></div>
                       <div><Link to="/contact" className='text-decoration-none'>Contact us</Link></div>
                       <div><Link to="/" className='text-decoration-none'>Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr></hr>
                       <div><p>SKSSF,Kempapura,Bangalore-24</p></div>
                       <div><p>+91-9655885264</p></div>
                       <div><p>+91-9655885264</p></div>
                       <div><p>musthafam39@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer