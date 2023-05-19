import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./header.css";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="bg-gradient-to-r from-black via-yellow-200 to-black  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="mb-[210px] lg:mb-0 ">
        <div className="px-4 py-5 mx-auto  md:px-24 lg:px-10">
          <div className="relative flex items-center justify-between">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-extrabold ml-5 text-sky-200 uppercase italic">
               TOY PARAGON
              </span>
            </Link>
            <ul className=" items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  className={`font-medium text-white ${(isActive) =>
                    isActive ? "text-red-600" : undefined}`}
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  title="Blog"
                  className="font-medium text-white"
                >
                 All Toys
                </NavLink>
              </li>

              {user?. uid && <>
                <li>
                <NavLink
                  to="/blogs"
                  title="Blog"
                  className="font-medium text-white"
                >
                My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addToys"
                  title="Blog"
                  className="font-medium text-white"
                >
                 Add A Toy
                </NavLink>
              </li>

              </> }
             
              
              <li>
                <NavLink
                  to="/blogs"
                  title="Blog"
                  className="font-medium text-white"
                >
                 Blog
                </NavLink>
              </li>

              <li>
                {user?.uid ? 
                
                (
                  <Link>
                    <button
                      onClick={logOut}
                      className="inline-flex items-center justify-center h-12 px-6 font-medium   transition duration-200 rounded shadow-md bg-gradient-to-trfrom-slate-900 via-rose-900 to-slate-900  focus:shadow-outline focus:outline-none text-white"
                      title="Log Out"
                    >
                      Log Out
                    </button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <button
                      className="inline-flex items-center justify-center h-12 px-6 font-medium  transition duration-200 rounded shadow-md bg-gradient-to-tr from-slate-900 via-rose-900 to-slate-900 focus:shadow-outline focus:outline-none text-white"
                      title="Login"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </li>

              <li>
                <Link to={"user-profile"}>
                  {user?.photoURL ? (
                    <div
                      className="tooltip tooltip-bottom tooltip-info"
                      data-tip={user?.displayName}
                    >
                      <div className="avatar online w-12 h-12">
                        <img
                          src={user.photoURL}
                          alt=""
                          className=" rounded-full "
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="tooltip tooltip-bottom tooltip-info"
                      data-tip={user?.displayName}
                    >
                      <FaUserAlt className="w-6 h-6 text-white" />
                    </div>
                  )}
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars className="w-7 h-6 text-gray-600" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5  bg-rose-400 border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" className="inline-flex items-center">
                          <img
                            src={logo}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                           TOY PARAGON
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <FaTimes className="w-6 h-6 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            className={`font-medium ${(isActive) =>
                              isActive ? "text-red-600" : undefined}`}
                            to={`/`}
                          >
                            Home
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to="/blogs"
                            title="Blog"
                            className="font-medium "
                          >
                            All Toys
                          </NavLink>
                        </li>
                        {user?. uid && <>
                <li>
                <NavLink
                  to="/blogs"
                  title="Blog"
                  className="font-medium text-white"
                >
                My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addToys"
                  title="Blog"
                  className="font-medium text-white"
                >
                 Add A Toy
                </NavLink>
              </li>

              </> }
                        <li>
                          <NavLink
                            to="/blogs"
                            title="Blog"
                            className="font-medium "
                          >
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <Link to={"user-profile"}>
                            {user?.photoURL ? (
                              <div
                                className="tooltip tooltip-bottom tooltip-info"
                                data-tip={user?.displayName}
                              >
                                <div className="avatar online w-12 h-12">
                                  <img
                                    src={user.photoURL}
                                    alt=""
                                    className=" rounded-full "
                                  />
                                </div>
                              </div>
                            ) : (
                              <FaUserAlt className="w-6 h-6 mx-auto" />
                            )}
                          </Link>
                        </li>

                        <li>
                          {user?.uid ? (
                            <Link>
                              <button
                                onClick={logOut}
                                className=" inline-flex items-center justify-center h-12 px-6 font-medium   transition duration-200 rounded shadow-md bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600  focus:shadow-outline focus:outline-none"
                                title="Log Out"
                              >
                                Log Out
                              </button>
                            </Link>
                          ) : (
                            <Link to={"/login"}>
                              <button
                                className="sign-login inline-flex items-center justify-center h-12 px-6 font-medium  transition duration-200 rounded shadow-md bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600 focus:shadow-outline focus:outline-none"
                                title="Login"
                              >
                                Login
                              </button>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
