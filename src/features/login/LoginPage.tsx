import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuthHook";
import heroImg from "../../assets/hero.png";
import logoImg from "../../assets/logo.png";
import "./Login.scss";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/users");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="image-container-wrapper">
        <div className="image-container">
          <img className="logo" src={logoImg} alt="logo" />
          <img
            className="login-hero-img"
            src={heroImg}
            alt="login hero image"
          />
        </div>
      </div>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <p>Enter details to login</p>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="Password"
          />

          <span>Forgot Password?</span>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
