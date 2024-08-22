import React from 'react'
import WEbsiteBreadCrumps from '../Utilis/WEbsiteBreadCrumps'

const Package = () => {
  return (
    <>
       <WEbsiteBreadCrumps parent={'Home'} child={'Package'}/>

       <section class="space packageinner-backgroundImg" >
        <div class="shape-mockup spin" data-top="15%" data-right="6%"><img src="/assets/img/shape/dots_1.svg"
                alt="shape"/></div>
        <div class="shape-mockup spin" data-bottom="6%" data-left="4%"><img src="/assets/img/shape/dots_1.svg"
                alt="shape"/></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="title-area text-center"><span class="sub-title shape-white"/>
                        <h2 class="sec-title text-white">Package</h2>
                       
                    </div>
                </div>
            </div>
            <div class="row gy-4">
                <div class="hover-item col-xl-4 col-md-6">
                    <div class="price-card ">
                        <div class="box-shape"><img src="/assets/img/shape/lines_3.png" alt="shape"/></div>
                        <h3 class="box-title">Package 1</h3>
                        <p class="box-price"><span class="duration">This basic package is suitable for suppliers (material, equipment, manpower hire, etc.) and those providing services to engineering and construction industry</span></p>
                        <div class="box-list price-1">
                            <ul>
                                <li>Register your company on ContractAce</li>
                                <li>Branding area - Create your company profile, enchance visibility and get more enquiries</li>
                                <li >Recieve "Request for Bids" from clients</li>
                                <li >Send tender queries and get response from clients.This can be made a part of contract document</li>
                                <li >Submit price bids</li>
                                <li >Printing and signing contract</li>
                            </ul>
                        </div>
                        <div class="box-footer"><a href="register-5.html" class="th-btn">Get Started<i
                                    class="far fa-arrow-right ms-2"></i></a></div>
                    </div>
                </div>
               
                <div class="hover-item col-xl-4 col-md-6">
                    <div class="price-card">
                        <div class="box-shape"><img src="/assets/img/shape/lines_3.png" alt="shape"/></div>
                        <h3 class="box-title">Package 2</h3>
                        <p class="box-price"><span class="duration">This package is suitable for small/medium size organisations (contractors, consultants and clients) have regular work for freelance contract managers or procurement experts</span></p>
                        <div class="box-list">
                            <ul>
                                <li>This package includes all features of package-1</li>
                                <li>Option to create new tenders</li>
                                <li>Finding vendors / contractors online</li>
                                <li>Sending tenders to select agencies</li>
                                <li >Receiving / collecting bids</li>
                                <li >Tender clarification. Receive tender queries and respond privately to    these queries. This can be made a part of the contract document</li>
                                <li >Provision for comparison / analysis of bids received</li>
                                <li >Receive revised quote from specific vendors after negotiation</li>
                                <li >Copy any previous tender, modify it and use it for upcoming projects</li>
                            </ul>
                        </div>
                        <div class="box-footer"><a href="register-5.html" class="th-btn">Get Started<i
                                    class="far fa-arrow-right ms-2"></i></a></div>
                    </div>
                </div>
                <div class="hover-item col-xl-4 col-md-6">
                    <div class="price-card ">
                        <div class="box-shape"><img src="/assets/img/shape/lines_3.png" alt="shape"/></div>
                        <h3 class="box-title">Package 3</h3>
                        <p class="box-price"><span class="duration">This package is suitable for medium to large organisations (contractors, consultants, freelancers and clients) with regular works</span></p>
                        <div class="box-list price-2">
                            <ul>
                                <li>This package includes all the features of package-2</li>
                                <li>Option to create customised templates for your organisation</li>
                                <li>Add employees / sub-users. Employees can be added to procurement/ tendering team and specific roles allocated</li>
                                <li>Modify a previous tender or use a customised template for an upcoming project</li>
                                <li>Import and export tender documents from third party such as freelance contract managers</li>
                            </ul>
                        </div>
                        <div class="box-footer"><a href="register-5.html" class="th-btn">Get Started<i
                                    class="far fa-arrow-right ms-2"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Package
