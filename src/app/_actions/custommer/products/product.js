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
export const getSearchResult = (payload) => {
    return {
      type: types.SEARCH_RESULT,
      payload
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
export const GETSTATE = () => {
  return {
    type: types.GETSTATE,
  };
};


// end bill


// cart
export const addToCart2 = (item) => {
  return {
    type: types.ADDTOCART,
    item
  }
}
export const removeCart2 = (payload) => {
  return {
    type: types.REMOVETOCART,
    payload,
  };
};

//


//CART

/*GET NUMBER CART*/
export function GetNumberCartSHOP(){
    return{
        type:'GET_NUMBER_CART_SHOP'
    }
}
 
export function AddCartSHOP(payload){
    return {
        type:'ADD_CART_SHOP',
        payload
    }
}
export function UpdateCartSHOP(payload){
    return {
        type:'UPDATE_CART_SHOP',
        payload
    }
}
export function DeleteCartSHOP(payload){
    return{
        type:'DELETE_CART_SHOP',
        payload
    }
}
 
export function IncreaseQuantitySHOP(payload){
    return{
        type:'INCREASE_QUANTITY_SHOP',
        payload
    }
}
export function DecreaseQuantitySHOP(payload){
    return{
        type:'DECREASE_QUANTITY_SHOP',
        payload
    }
}
export function ClearCart(payload){
    return {
      type: "CLEAR_CART_SHOP",
      payload,
    };
}

//END CART

export function chooseStep1(payload) {
  return {
    type: "CHOOSE_STEP_1",
    payload
  };
}
export function chooseStep2(payload) {
  return {
    type: "CHOOSE_STEP_2",
    payload,
  };
}
export function chooseStep3(payload) {
  return {
    type: "CHOOSE_STEP_3",
    payload,
  };
}
export function chooseImageStep3(payload) {
  return {
    type: "CHOOSE_STEP_3_IMAGE",
    payload,
  };
}