import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { START } from "../redux/shoppingReducer";
const useProducts = () => {
  const dispatch = useDispatch();
  async function fetchAPI() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response);
      dispatch(START(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAPI();
  },[]);
};

export default useProducts;
