import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./productdetails.css";
import { add } from "../redux/slices/cartslice";
import {
  setSelectedProduct,
  removeSelectedProduct,
} from "../redux/slices/selectedProduct.js";

function ProductDetails() {
  const { productid } = useParams();
  const dispatch = useDispatch();
  let details = useSelector((state) => state.selectedProduct);
  const getdetails = async (productid) => {
    const resposne = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((error) => console.log(error));
    dispatch(setSelectedProduct(resposne.data));
    console.log(details);
  };
  const handelclick = (details) => {
    dispatch(add(details));
  };
  useEffect(() => {
    getdetails(productid);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div>
      {Object.keys(details).length === 0 ? (
        <div>Loading..........</div>
      ) : (
        <div className="min-h-[100vh]">
          <img className="produt_image" src={details.image} alt="" srcset="" />
          <br />
          <h4 className="font-semibold">{details.title}</h4>
          <br />
          <h4 className="font-semibold">Price: ${details.price}</h4>

          <p>{details.description}</p>
          <br />
          <div className="flex justify-center gap-5">
            <button
              onClick={() => {
                handelclick(details);
              }}
              className=" text-center p-3 bg-[#2874f0] text-white rounded-lg shadow-md"
            >
              Add to cart
            </button>
            <Link
              to="/cart"
              className=" text-center p-3 bg-[#2874f0] text-white rounded-lg shadow-md"
            >
              Go to cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
