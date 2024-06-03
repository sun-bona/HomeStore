import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import { LockKeyhole, Mail, X } from "lucide-react";
import { useState } from "react";

// for images
import form from "../assets/form.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [member, setMember] = useState([]);

  const [isLogin, setIsLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) return null;
    const addMember = { name, email, password };
    const updateMember = [...member, addMember];
    setMember(updateMember);
    setIsLogin(true);
  }
  if(isLogin == true){
    return <Navigate to='/'/>
  }

  return (
    <div className="form_login">
      <Link to="/">
        <X
          className="back_icon_form"
          strokeWidth={2.25}
          size={35}
          color="rgb(100, 51, 51)"
        />
      </Link>
      <div className="form_login_text">
        <div className="form_login_text_img">
          <img src={form} alt="" />
        </div>
        <div className="form_login_text1">
          <h2>Welcome Back!</h2>
          <p>To keep connect with us please login with your personal info</p>
        </div>
      </div>

      <div className="form_login_fill">
        <h2>Create Account</h2>

        <form className="login_block">
          <div className="email_pass" id="name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="email_pass">
            <Mail strokeWidth={2} color="rgb(183, 182, 182)" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="email_pass">
            <LockKeyhole strokeWidth={2} color="rgb(183, 182, 182)" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
            />
          </div>
          <button onClick={handleSubmit} className="SignIn" type="submit">
            Sign in
          </button>
        </form>

        <div className="line">
          <h2 className="line_text">Or</h2>
        </div>

        <div className="conect_medai">
          <div className="conect_medai_img">
            <img src={google} alt="" />
          </div>
          <div className="conect_medai_img">
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
