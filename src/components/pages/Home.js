import React from "react";
import Footer from "../com-comp/Footer";
import { Slider } from "../com-comp/Slider";
import Mv from "./common/Mv";

export function Home() {
    return (
        <div>
            <Slider></Slider>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Company</h4>
                            <div className="underline mb-3"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv></Mv>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Services</h4>
                            <div className="underline mb-3"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card  shadow">
                                <div className="card-body">
                                    <h6>Web Designing</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card  shadow">
                                <div className="card-body">
                                    <h6>Web Development</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Web Hosting</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}