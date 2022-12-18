import "./App.css";
import { fetchproducts } from "./redux/slices/setproducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cartpage from "./components/Cartpage";
import ProductDetails from "./components/ProductDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <div className="App bg-[#f1f3f6] min-h-[100vh]">
        <div className="w-[100vw] h-[50px]"></div>
        <div className="container max-w-[1000px] mx-auto p-3 bg-[#ffffff] box-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productdetails/:productid"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cartpage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
