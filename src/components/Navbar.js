import React from "react";
import cartimg from "./images/cartimage.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.cart.items.length);
  return (
    <div className="fixed t-0 w-[100vw]  bg-[#2874f0] text-white z-[2] shadow-sm">
      <div className="container max-w-[1000px] mx-auto flex justify-between px-3 py-2">
        <Link to="/">
          <div className=" flex gap-2">
            <img
              className=" h-[28px] mt-1"
              src="https://fakestoreapi.com/icons/logo.png"
              alt=""
            />
            <div>
              <h3 className="">FakeKart</h3>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <div className="flex gap-1 mr-2">
            <p className="mt-2">Cart</p>
            <img
              className="w-[12px] h-[12px] mt-3"
              src={cartimg}
              alt=""
              srcset=""
            />
            <span className="rounded-[50%] px-1 bg-red-500">{count}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
