import { useContext, useState } from "react";
import img from "../../assets/images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { login, setLoading, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    // console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("food-token", data.token);
            setError("");
            form.reset();
            toast.success("Successfully loged in");
            navigate(from, { replace: true });
          });
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
        const currentUser = {
          email: user.email
        }

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("food-token", data.token);
            toast.success("Successfully loged in");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid  md:grid-cols-2 gap-5  flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} style={{width:'300px', height:'300px'}} alt="" />
        </div>
        <div className="p-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
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
                <Link
                  to="/signup"
                  className="mt-5 label-text-alt link link-hover"
                >
                  New to genius car?
                </Link>
              </label>
            </div>
            <p className="text-red-600 mt-3 mb-3">{error}</p>

            <div className="form-control mt-6">
              <input className=" btn btn-outline text-white bg-orange-700" type="submit" value="Login" />
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline text-white bg-orange-700"
          >
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
