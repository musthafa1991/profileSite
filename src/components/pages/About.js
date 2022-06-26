import React from "react";
import Footer from "../com-comp/Footer";
import Mv from "./common/Mv";

export function About(){
    return(
        <div>
             <section className="bg-primary text-center py-3">
            <h1>About</h1>
          </section>
          <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>About Our Company</h4>
                            <div className="underline mb-3"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv></Mv>
            <Footer></Footer>
        </div>
    )
}