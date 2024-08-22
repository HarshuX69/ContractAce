import React from 'react'
import WEbsiteBreadCrumps from '../Utilis/WEbsiteBreadCrumps'
const Contactus = () => {
  return (
    <>
    <WEbsiteBreadCrumps parent={'Home'} child={'Contact Us'}/>
       <div class="overflow-hidden space-bottom">
        <div class="shape-mockup moving d-none d-xxl-block" data-bottom="0%" data-right="0%">
            <img src="assets/img/shape/man_shape_1.png" alt="shape"/></div>
        <div class="container">
            <div class="contact-area">
                <div class="row">
                    <div class="col-xl-5 mb-35 mb-xl-0">
                        <div class="contact-media-area">
                            <div class="contact-media-wrap">
                                <h3 class="box-title">Contact Information</h3>
                                <p class="text-white">Fill up the form</p>
                                
                            </div>
                            <div class="contact-media-wrap">
                                <h3 class="box-title">Quick Contact</h3>
                                <div class="contact-media">
                                   
                                    
                                        <div class="icon-btn"><i class="fas fa-location-dot"></i></div>
                                        <div class="media-body">
                                            <p class="box-text">Thrissur, Kerala, India.</p>
                                        </div>
                                   
                                </div>
                                <div class="contact-media">
                                    <div class="icon-btn"><i class="fas fa-envelope"></i></div>
                                    <div class="media-body">
                                        <h4 class="box-label">Email Us:</h4>
                                        <p class="box-text"><a href="mailto:support24@rakar.com">support@contractace.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-ioc">
                                <div class="contact-media">
                                    <div class="icon-btn"><i class="fas fa-envelope"></i></div>
                                   
                                </div>
                                <div class="contact-media">
                                    <div class="icon-btn"><i class="fas fa-envelope"></i></div>
                                    
                                </div>
                                <div class="contact-media">
                                    <div class="icon-btn"><i class="fas fa-envelope"></i></div>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-7 text-center text-xl-start">
                        <div class="ps-xxl-4 ms-xl-3">
                            <div class="title-area"><span class="sub-title"/>
                                <h2 class="sec-title">Get In Touch</h2>
                                <p>Let us know how we can help and set up a time to chat with us!</p>
                            </div>
                            <form action="https://html.themeholy.com/rakar/demo/mail.php" method="POST"
                                class="contact-form2 ajax-contact">
                                <div class="row">
                                    <div class="form-group col-md-6"><input type="text" class="form-control" name="name"
                                            id="name" placeholder="Your Name"/> <i class="fal fa-user"></i></div>
                                    <div class="form-group col-md-6"><input type="email" class="form-control"
                                            name="email" id="email" placeholder="Email"/> <i
                                            class="fal fa-envelope"></i></div>
                                    <div class="form-group col-md-6"><input type="tel" class="form-control"
                                            name="number" id="number" placeholder="Phone Number"/> <i
                                            class="fal fa-phone"></i></div>
                                            <div class="form-group col-md-6"><input type="tel" class="form-control"
                                                name="number" id="number" placeholder="City"/> <i
                                                class="fal fa-phone"></i></div>
                                    
                                    <div class="form-group col-12"><textarea name="message" id="message" cols="30"
                                            rows="3" class="form-control" placeholder="Your Message"></textarea> <i
                                            class="fal fa-pencil"></i></div>
                                    <div class="form-btn col-12"><button class="th-btn">Submit Request<i
                                                class="far fa-arrow-right ms-2"></i></button></div>
                                </div>
                                <p class="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contactus
