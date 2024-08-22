import { useState } from "react";
import { Link } from 'react-router-dom'

import Loader from "../../Utilis/Loader";
const Register = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
     <Loader show={loading}/>
     <div class="col-md-6 d-flex align-items-center py-5">
            <div class="container my-auto py-4 shadow-lg bg-white">
              <div class="row">
                <div class="col-11 col-lg-10 mx-auto">
                  <h3 class="text-9 fw-600 text-center my-2">Registration</h3>
                  <p class="text-center mb-2">Personal Details </p>
                  <form id="registerForm" method="post">
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="emailAddress">Name</label>
                      <input type="text" class="form-control rounded-0" id="text" required placeholder="Enter Your Name"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="emailAddress">Number</label>
                      <input type="number" class="form-control rounded-0" id="number" required placeholder="Enter Your Number"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="emailAddress">Email </label>
                      <input type="email" class="form-control rounded-0" id="emailAddress" required placeholder="Enter Your Email"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="emailAddress">Username</label>
                      <input type="email" class="form-control rounded-0" id="emailAddress" required placeholder="Enter Your Email"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="loginPassword">Password</label>
                      <input type="password" class="form-control rounded-0" id="loginPassword" required placeholder="Enter Password"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="loginPassword">Confirm Password</label>
                      <input type="password" class="form-control rounded-0" id="loginPassword" required placeholder="Confirm Password"/>
                    </div>
                    <div class="form-check my-2">
                      <input id="remember-me" name="remember" class="form-check-input rounded-0" type="checkbox"/>
                      <label class="form-check-label" for="remember-me">I agree to the Terms and Conditions</label>
                    </div>
                    <div class="d-grid my-3">
						<button class="btn btn-dark rounded-0 login-btn-1" type="submit">Continue</button>
					</div>
                    <p class="text-center text-muted text-2 mb-0">Already a member?  <Link to='/auth/Login'>Login now</Link></p>
                  </form>
                  <div class="d-flex align-items-center my-2">
                    <hr class="flex-grow-1"/>
                    <span class="mx-2 text-2 text-muted">Or create with</span>
                    <hr class="flex-grow-1"/>
                  </div>
                  <div class="row g-3 mb-2">
                    <div class="col-sm-4 d-grid">
                      <button type="button" class="btn btn-outline-facebook btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-facebook-f"></i></span>Facebook</button>
                    </div>
                    <div class="col-sm-4 d-grid">
                      <button type="button" class="btn btn-outline-google btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-google"></i></span>Google</button>
                    </div>
                    <div class="col-sm-4 d-grid">
                      <button type="button" class="btn btn-outline-twitter btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-twitter"></i></span>twitter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Register
