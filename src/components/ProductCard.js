import React from "react";
// import "./productcard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartslice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="h-[100%]">
      <a href="#" className="group">
        <div className="h-[100%] flex flex-col justify-between">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={product.image}
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div>
            <h3 className="mt-4 text-sm text-gray-700">
              {product.title.slice(0, 20)}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $ {product.price}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
