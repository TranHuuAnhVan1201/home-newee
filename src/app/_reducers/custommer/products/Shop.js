import * as types from "../../../_constants/ActionType";

const initProduct = JSON.parse(localStorage.getItem("shop")) || {
  numberCart: 0,
  Carts: [],
  _products: [],
  results: []
};

var myReducer = (state = initProduct, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_SHOP:
      return {
        ...state,
        _products: action.payload,
      };
    case types.GET_NUMBER_CART_SHOP:
      return {
        ...state,
      };
    case types.ADD_CART_SHOP:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          link: action.payload.link,
          price1: action.payload.price1,
          priceSeller1: action.payload.priceSeller1,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            link: action.payload.link,
            price1: action.payload.price1,
            priceSeller1: action.payload.priceSeller1,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case types.INCREASE_QUANTITY_SHOP:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case types.DECREASE_QUANTITY_SHOP:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case types.DELETE_CART_SHOP:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id !== state.Carts[action.payload].id;
        }),
      };
    case types.SEARCH_RESULT:
      console.log("da chay SEACH_RESULT");
      return {
        ...state,
        results: action.payload
      };
    case types.CLEAR_CART_SHOP:
      return {
        numberCart: 0,
        Carts: [],
        _products: [],
      };

    default:
      return state;
  }
};
export default myReducer;
