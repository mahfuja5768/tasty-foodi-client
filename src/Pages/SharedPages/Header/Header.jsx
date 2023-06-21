import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaMixer, FaBars } from "react-icons/fa";
import logo from "../../../assets/images/logo2.png";
import "./Header.css";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully log out!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="shadow-md hover:shadow-xl rounded-b-lg mb-5 bg-pink-200">
      <div>
        <nav className="nav w-full py-0 md:flex justify-between items-center">
          <div className="md:flex flex justify-between items-center">
            <div onClick={() => setOpen(!open)} className="h-1 w-6 md:hidden">
              {open ? (
                <FaMixer className="text-end"></FaMixer>
              ) : (
                <FaBars></FaBars>
              )}
            </div>
            <div className="flex justify-end items-center">
              <img
                src={logo}
                style={{ height: "90px", width: "90px" }}
                alt=""
              />
              <li>
                <Link className="btn btn-ghost normal-case text-4xl">
                  Tastyfoodi
                </Link>
              </li>
            </div>
          </div>
          <div>
            <ul
              className={`md:flex justify-between w-full text-end absolute md:static duration-500 ease-out ${
                open ? "top-11" : "top-[-320px]"
              }`}
            >
              <div className="md:flex">
                <li>
                  <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/allfoods"
                    className="btn btn-ghost normal-case text-xl"
                  >
                    Foods
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="btn btn-ghost normal-case text-xl"
                  >
                    About
                  </Link>
                </li>
                {user?.uid ? (
                  <div className="flex items-center">
                    <li>
                      <Link
                        to="/myReviews"
                        className="btn btn-ghost normal-case text-xl"
                      >
                        My reviews
                      </Link>
                    </li>
                    <div>
                      <span className="me-3 text-black">
                        <b>{user?.email}</b>
                      </span>
                    </div>
                    <div>
                      <Link>
                        {user?.photoURL ? (
                          <img
                            src={user?.photoURL}
                            style={{ height: "40px" }}
                            title={user?.displayName}
                          ></img>
                        ) : (
                          <FaUserAlt className="bg-black-600 w-24 rounded-full"></FaUserAlt>
                        )}
                      </Link>
                    </div>
                    <div>
                      <li>
                        <Link
                          to="/login"
                          onClick={handleLogout}
                          className="btn btn-ghost normal-case text-xl"
                        >
                          Log Out
                        </Link>
                      </li>
                    </div>
                  </div>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="btn btn-ghost normal-case text-xl"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="btn btn-ghost normal-case text-xl"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
