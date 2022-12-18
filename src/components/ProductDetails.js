import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productdetails.css";
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
  useEffect(() => {
    getdetails(productid);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productid]);

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
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
