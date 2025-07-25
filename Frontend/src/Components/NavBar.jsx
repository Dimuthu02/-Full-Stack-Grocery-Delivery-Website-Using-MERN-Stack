import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

import { useAppContext } from "../Context/AppContect";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
const { user, setuser, setshowUserlogin,navigate } = useAppContext();
const logout=async()=>{
  setuser(null);
  navigate('/');
}
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-gray-50 relative transition-all">
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
      
        <img src={assets.logo} alt="logo" className="h-10" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className="hover:text-indigo-600 transition">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-indigo-600 transition">
          All Product
        </NavLink>
        <NavLink to="/contact" className="hover:text-indigo-600 transition">
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        <div onClick={()=>navigate("/cart")} className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-emerald-600 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>
        {!user ? (
          <button
            onClick={() => setshowUserlogin(true)}
            className="cursor-pointer px-8 py-2 bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              className="w-10 h-10 rounded-full cursor-pointer"
              alt="Profile"
            />
            <ul className="hidden group-hover:block absolute top-12 right-0 bg-white shadow-lg rounded-md w-44 text-sm z-50">
              <li
                onClick={() => navigate("/myorders")}
                className="px-4 py-2 hover:bg-emerald-50 cursor-pointer transition-colors"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="px-4 py-2 hover:bg-red-50 text-red-500 hover:text-red-700 cursor-pointer transition-colors"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink
          to="/"
          className="block hover:text-indigo-600 transition"
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="block hover:text-indigo-600 transition"
          onClick={() => setOpen(false)}
        >
          All Product
        </NavLink>
        {user && (
          <NavLink
            to="/products"
            className="block hover:text-indigo-600 transition"
            onClick={() => setOpen(false)}
          >
            My order
          </NavLink>
        )}

        <NavLink
          to="/"
          className="block hover:text-indigo-600 transition"
          onClick={() => setOpen(false)}
        >
          Content
        </NavLink>
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setshowUserlogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
