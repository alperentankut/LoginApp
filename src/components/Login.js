import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebaseSetup/firebase.js";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import "../styles/login.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginData = collection(db, "login-info");
  const navigate = useNavigate();
  const authUser = async () => {
    const res = query(
      loginData,
      where("username", "==", username),
      where("password", "==", password)
    );
    const data = await getDocs(res);
    if (data.size === 0) {
      const MySwal = withReactContent(Swal);
        MySwal.fire({
        title: <strong>Kullanıcı adı veya parola hatalı</strong>,
        icon: "error",
      });
    } else {
      let timerInterval;
      Swal.fire({
        title: "Giriş Başarılı",
        timer: 1200,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {}, 100);
        },
        
      });
      const navigatePage = () => {
        navigate("/form");
      };
      
      setTimeout(() => {
        navigatePage();
      }, 1300);
    }
  };

  return (
    <div className="login">
      <p className="text">Login screen</p>
      <input
        className="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        className="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="btn" onClick={authUser}>
        Login
      </button>
    </div>
  );
};

export default Login;
