import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function Signup() {
  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyBAeXGD3AP-3I4zZd6yPehqr9E7FA0Bdf4",
    authDomain: "pace-assignment-57732.firebaseapp.com",
    projectId: "pace-assignment-57732",
    storageBucket: "pace-assignment-57732.appspot.com",
    messagingSenderId: "117751269826",
    appId: "1:117751269826:web:c38daf7bfa403b29952e5b",
    measurementId: "G-98RQZFPKS9",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  const analytics = getAnalytics(app);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h4>Welcome to Bardeen</h4>
        <p>Let's log in to launch your automations.</p>
        <div className="input-container">
          <input placeholder="Email Address" />
          <input placeholder="Password" />
        </div>

        <div className="signup-option">
          <div>Create Account</div>
          <div>Forgot Password?</div>
        </div>
        <button className="signup-btn">Sign in</button>
        <div className="google-and-github-signup">
          <button
            className="google-signup"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <FcGoogle className="signup-icon" /> Sign in with Google
          </button>
          <button className="github-signup">
            <AiFillGithub className="signup-icon" /> Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
}
