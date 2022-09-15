import { productTypes, basketTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: obj});

export const addProductDatabase = (obj) => async (dispatch) => {
  const res = await fetch('http://localhost:3100/', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const obj2 = await res.json()
 dispatch(addProductAction({...obj, id: obj2.id}));
 };

export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });


export const deleteProductHandler = (id) => async (dispatch) => {
  await fetch(`http://localhost:3100/api/products/${id}`, {
    method: 'DELETE',
  });
  dispatch(delProductAction(id));
};
