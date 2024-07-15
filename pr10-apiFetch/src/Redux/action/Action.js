export const View_Data = () => {
  return async (dispatch) => {
    let record = await fetch("https://dummyjson.com/products");
    let data = await record.json();
    let products = data.products;
    // console.log(products);

    try {
      dispatch({
        type: "view",
        payload: products,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
