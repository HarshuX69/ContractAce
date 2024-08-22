import React from 'react'
import WEbsiteBreadCrumps from '../Utilis/WEbsiteBreadCrumps'

const About = () => {
  return (
    <>
     <WEbsiteBreadCrumps parent={'Home'} child={'About'}/>
    <div class="overflow-hidden space space-about-4" >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-12 col-lg-12 col-md-12 text-center text-xl-start">
                 <p class="text-white">At ContractAce it is our endeavour to ensure that the benefits of e-tendering & professional contract management services are available to all organisations and individuals. The platform provides a full 360 degree solution for Tendering, Contract Management & Procurement. The open architecture of the platform is designed to ensure that it is suitable for preparation of complex engineering contracts.</p>
                 <p class="text-white">The platform is designed to assist organisations to streamline and substantially improve the efficiency of their contract management and procurement process. The platform is also helpful for individuals and organisations whose core expertise is not in construction but wish to undertake construction projects for their own needs.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About
