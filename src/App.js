import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import PrivateRoute from "./Auth/PrivateRoute";
import Authmain from "./Auth/AuthComponent/Authmain";
import Login from "./Auth/AuthComponent/Login";
import Register from "./Auth/AuthComponent/Register";
import Main from "./Website/Master/Main";
import Home from "./Website/Home";
import About from "./Website/About";
import Service from "./Website/Service";
import Package from "./Website/Package";
import TrainingHub from "./Website/TrainingHub";
import ClentServerDetails from './Website/ClentServerDetails';
import ConsulateServer from './Website/ConsulateServer';
import ContractorsService from './Website/ContractorsService';
import SupplyDetails from './Website/SupplyDetails';
import ManagerDetails from './Website/ManagerDetails';
import Contactus from "./Website/Contactus";
import Dashboard from "./Portal/Dashboard";


function App() {
  return (
    <div className="App">
       <Router>
        <AuthProvider>
          <Routes>
           {/* Routes that should include Header and Footer */}
            <Route element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Package" element={<Package />} />
              <Route path="/TrainingHub" element={<TrainingHub />} />
              
              <Route path="/ClentServerDetails" element={<ClentServerDetails/>} />
              <Route path="/ConsulateServer" element={<ConsulateServer/>} />
              <Route path="/ContractorsService" element={<ContractorsService/>} />
              <Route path="/SupplyDetails" element={<SupplyDetails/>} />
              <Route path="/ManagerDetails" element={<ManagerDetails/>} />

              <Route path="/ContactUs" element={<Contactus />} />
            </Route>

            {/* Routes that should not include Header and Footer */}
            <Route element={<Authmain />}>
              <Route path="auth/Login" element={<Login />} />
              <Route path="auth/Register" element={<Register />} />
            </Route>
          
            
            {/* Authroziation Private routes */}
            <Route element={<PrivateRoute />}>
              <Route path="app/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
