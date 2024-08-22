import React from 'react'

const Footer = () => {
  return (
       <footer
        class="footer-wrapper footer-layout5"
        data-bg-src="assets/img/bg/footer_bg_5.png"
      >
        <div class="copyright-wrap">
          <div class="container">
            <div class="row gy-2 align-items-center">
              <div class="col-md-6">
                <p class="copyright-text">
                  Copyright <i class="fal fa-copyright"></i> 2024{" "}
                  <a href="home-handyman.html">Rakar</a>. All Rights Reserved.
                </p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-links">
                  <div class="th-social">
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f"></i>
                    </a>{" "}
                    <a href="https://www.twitter.com/">
                      <i class="fab fa-twitter"></i>
                    </a>{" "}
                    <a href="https://www.instagram.com/">
                      <i class="fab fa-instagram"></i>
                    </a>{" "}
                    <a href="https://www.linkedin.com/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
