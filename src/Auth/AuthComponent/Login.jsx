import { useState } from "react";
import {useAuth} from '../AuthProvider'
import '../../css/login.css'
import { showErrorAlert,showAlert } from "../../Utilis/sweatlaert";
import Loader from "../../Utilis/Loader";
import { Link } from 'react-router-dom'
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  
  const  handleSubmitEvent = async (e) => {
    e.preventDefault();
    try{
      setLoading(true)
      if (input.username !== "" && input.password !== "") {
        auth.logindemo(input);
        return;
      }
      showAlert("pleae provide a Username or Password");
    }
    catch(err){
      showErrorAlert(err)
    }
    finally{
      setLoading(false)
    }
  };
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
  
   <>
     <Loader show={loading}/>
          <div class="col-md-6 d-flex align-items-center py-3">
            <div class="container my-auto py-3 shadow-lg bg-white">
              <div class="row">
                <div class="col-11 col-lg-10 mx-auto">
                  <h3 class="text-9 fw-600 text-center my-2">Login</h3>
                 
                  <form id="loginForm" >
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="idusername">Username </label>
                      <input type="username" class="form-control rounded-0" id="idusername"   onChange={handleInput} required placeholder="Enter Your Email" name="username"/>
                    </div>
                    <div class="mb-2">
                      <label class="form-label text-dark fw-600" for="loginPassword">Password</label>
                      <input type="password" class="form-control rounded-0" id="loginPassword"  onChange={handleInput} required placeholder="Enter Password" name="password"/>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <div class="form-check text-end">
                          <a class="forgot-a" href="#">Forgot Password</a>
                        </div>
                      </div>
                    </div>
                    <div class="d-grid my-3">
						<button class="btn btn-dark login-btn-1 rounded-0" type="submit" onClick={handleSubmitEvent}>Sign In</button>
					</div>
                  </form>
                  <div class="d-flex align-items-center my-3">
                    <hr class="flex-grow-1"/>
                    <span class="mx-2 text-2 text-muted">Or sign in with</span>
                    <hr class="flex-grow-1"/>
                  </div>
                  <div class="row g-3 mb-4">
                    <div class="col-sm-4 d-grid">
                      <button type="button" class="btn btn-outline-facebook btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-facebook-f"></i></span>Facebook</button>
                    </div>
                    <div class="col-sm-4 d-grid">
                      <button type="button" class="btn btn-outline-google btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-google"></i></span>Google</button>
                    </div>
                    <div class="col-sm-4 d-grid ">
                      <button type="button" class="btn btn-outline-twitter btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-twitter"></i></span>twitter</button>
                    </div>
                  </div>
                  <p class="text-center">Not a Member ? <Link to='/auth/Register'><u>Register</u></Link> </p>
                </div>
              </div>
            </div>
          </div>
   </>
   
  );
};

export default Login;
