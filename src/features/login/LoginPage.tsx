import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuthHook";
import heroImg from "../../assets/hero.png";
import logoImg from "../../assets/logo.png";
import "./Login.scss";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordIncorrectError, setPasswordIncorrectError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailIncorrectError, setEmailIncorrectError] = useState(false);
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("please fill all the required fields before proceeding");
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }
    if (login(email, password)) {
      navigate("/users");
    } else {
      toast.error("Invalid credentials");
      if (email !== ADMIN_EMAIL) {
        setEmail("");
        setEmailIncorrectError(true);
      }
      if (password !== ADMIN_PASSWORD) {
        setPassword("");
        setPasswordIncorrectError(true);
      } 
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
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
              setEmailIncorrectError(false);
            }}
            placeholder="Email"
          />
          {emailError && (
            <span className="error">Please fill in your email</span>
          )}
          {emailIncorrectError && (
            <span className="error">Could not find user with that email</span>
          )}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
              setPasswordIncorrectError(false);
            }}
            placeholder="Password"
            type="Password"
          />
          {passwordError && (
            <span className="error">Please fill in your password</span>
          )}
          {passwordIncorrectError && (
            <span className="error">Please fill in the correct password</span>
          )}

          <span>Forgot Password?</span>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
