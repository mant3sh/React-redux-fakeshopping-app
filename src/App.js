import "./App.css";
import { add } from "./redux/slices/cartslice.js";
import { useDispatch } from "react-redux";
import {
  setSelectedProduct,
  removeSelectedProduct,
} from "./redux/slices/selectedProduct";

function App() {
  const dispatch = useDispatch();
  const handelclick = () => {
    dispatch(add({ id: 1, name: "fuck you" }));
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <div>hwllo</div>
      <button onClick={handelclick}>click to add</button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(setSelectedProduct({ id: 2, price: 36 }));
        }}
      >
        set slecetd product
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(removeSelectedProduct());
        }}
      >
        {" "}
        remove selected product
      </button>
    </div>
  );
}

export default App;
