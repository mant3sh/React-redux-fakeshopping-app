import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove ,increasequan ,decreasequqn,checkout } from "../redux/slices/cartslice";


function Cartpage() {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const handelremove=(item)=>{
    dispatch(remove(item));
  }
  return (
    <div>
      Cartpage
      <div className="h-[18vh] overflow-hidden">
        <div className="w-[100%] py-4 rounded flex flex-col justify-center gap-2 bg-blue-300">
          <div className="flex justify-evenly">
            <span className="text-lg font-semibold">Total Amount</span>{" "}
            <span className="text-lg font-semibold">${cart.totalAmount}</span>
          </div>
          <div className="flex justify-center">
            <button onClick={()=>{
              dispatch(checkout());
            }} className="px-4 py-1 bg-green-500 text-white text-lg rounded-xl font-bold ">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="h-[68vh] overflow-y-scroll flex flex-col gap-3">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="w-[100%] grid h-[100px] grid-cols-3 gap-1 "
          >
            <div>
              <img
                src={item.details.image}
                className=" mx-auto my-auto w-[60px]"
                alt=""
                srcset=""
              />
            </div>
            <div className="">
              <p>{item.details.title.slice(0, 30)}</p>
              <p>Price: $ {item.details.price}</p>
              <p>quan: {item.count} N</p>
              <p>total: $ {Math.round(item.count * item.details.price)}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-center">
                <button onClick={()=>{
                  handelremove(item.details)
                }} className="px-3 py-1 rounded-lg bg-red-600 text-white font-bold">
                  Remove
                </button>
              </div>
              <div className="flex justify-center gap-3">
                <button onClick={()=>{
                  dispatch(increasequan(item.details));
                }} className="bg-blue-400 rounded-lg align-middle py-1 px-2 text-white font-extrabold">
                  +
                </button>
                <button onClick={()=>{
                  dispatch(decreasequqn(item.details))
                }} className="bg-blue-400 rounded-lg  align-middle py-1 px-2 text-white font-extrabold">
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartpage;
