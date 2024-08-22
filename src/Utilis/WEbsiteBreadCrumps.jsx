import React from 'react'

const WEbsiteBreadCrumps = ({parent,child}) => {
  return (
    <div class="breadcumb-wrapper background-image inner-backgroundImg" >
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">{child}</h1>
                <ul class="breadcumb-menu">
                    <li><a href="home-handyman.html">{parent}</a></li>
                    <li>{child}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WEbsiteBreadCrumps
