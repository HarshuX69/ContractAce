import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await fetch("your-api-endpoint/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("app/Dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
      alert(err)
    }
  };
  const logindemo = async (data) => {
    try {
  
      setUser(data.username);
        setToken(data.username);
        console.log('toke',data.username);
        localStorage.setItem("site", data.username);
        navigate("app/Dashboard");
        return;
    } catch (err) {
      console.error(err);
      alert(err)
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("auth/Login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut,logindemo }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};