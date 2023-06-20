import React, { useContext, useState } from "react";
import img from "../../assets/images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaGoogle} from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {

    const [error, setError] = useState("");

    const { setLoading, providerLogin, createUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
  
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const password = form.password.value;
      const email = form.email.value;
      console.log(email, password);
  
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          form.reset();
          toast.success('Successfully loged in');
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("error", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success('Successfully loged in')
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("error", error);
        });
    };

    return (
        <div className="hero w-full my-10">
        <div className="hero-content grid  md:grid-cols-2 gap-5  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="p-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign up</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>   
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <p className="text-red-600 mt-3 mb-3">{error}</p>
  
              <div className="form-control mt-6">
                  <input className="btn btn-outline text-white bg-orange-700" type="submit" value="Sign up" />
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-outline text-white bg-orange-700">            
            <FaGoogle></FaGoogle> Sign up with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;