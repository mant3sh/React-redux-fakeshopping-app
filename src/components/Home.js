import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Home() {
  const produts = useSelector((state) => state.products);
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  },[])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="">Products</h2>
        <br/>

        <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {produts.map((product) => (
            
            <div key={product.id} className="border p-4 rounded-lg hover:scale-[1.08] duration-500">
              <Link to={`/productdetails/${product.id}`}>
            <ProductCard  product={product}/>
            </Link>
            </div>
           

          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
