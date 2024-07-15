import axios from "axios";

export const view_data = () => {
  return async (dispatch) => {
    const record = await axios.get("https://dummyjson.com/products");
    try {
      console.log(record.data.products);
      dispatch({
        type: "view",
        payload: record.data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
