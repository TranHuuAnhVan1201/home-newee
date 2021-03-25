import *as types from './../../../_constants/ActionType';
import callAPI from "./../../../_untils/callAPI";

export const IDName = (id) => {
    return {
        type: types.ID,
        id /// đúng tên
    }
}

export const getProduct = () => {
    return {
        type: types.GETPRODUCT
    }
}


//Load Product List
export const actLoadProductListRequest = () => {
  return (dispatch) => {
    return callAPI(`product`, "GET", null).then((res) => {
      dispatch(actLoadProductList(res.data));
    });
  };
};

//load product
export const actLoadProductList = (dataProduct) => {
  return {
    type: types.LOAD_PRODUCT_LIST,
    dataProduct, //action sẽ nhận lại
  };
};


// cart
export const addProductToCart = (payload) => {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload,
  };
};

//cart
export const deleteProductInCart = (payload) => {
  return {
    type: types.DELETE_CART,
    payload,
  };
};
export const getIncrease_Quantity = (payload) => {
  return {
    type: types.INCREASE_QUANTITY,
    payload,
  };
};
export const getDecrease_Quantity = (payload) => {
  return {
    type: types.DECREASE_QUANTITY,
    payload,
  };
};

export const getTotal_Price = (payload) => {
  return {
    type: types.TOTAL_PRICE,
    payload,
  };
};

// end cart

// bill
// end cart
export const getBill_ID = (bill_id) => {
  return {
    type: types.BILL_ID,
    bill_id,
  };
};
export const getUSER_ID = (user_id) => {
  return {
    type: types.CART_ID,
    user_id,
  };
};

export const getIMG_ID = (img_id) => {
  return {
    type: types.UPIMG_ID,
    img_id,
  };
};

export const getPRODUCT_ID = (product_id) => {
  return {
    type: types.UPPRODUCT_ID,
    product_id,
  };
};

// end bill