/* eslint-disable import/prefer-default-export */

import * as types from '../constants';
import restApi from '../core/RestApi';

function requestCreateProduct() {
  return {
    type: types.CREATR_PRODUCT,
  };
}

function receiveCreateProduct(data) {
  return {
    type: types.RECEIVE_CREATR_PRODUCT,
    payload: data,
  };
}

export function changeTitleInput(title) {
  return {
    type: types.CHANGE_TITLE_INPUT,
    payload: title,
  };
}

export function changeCostPriceInput(costPirce) {
  return {
    type: types.CHANGE_COST_PRICE_INPUT,
    payload: costPirce,
  };
}

export function createProduct(newProduct) {
  return (dispatch) => {
    dispatch(requestCreateProduct());

    return restApi.createProduct(newProduct)
    .then(data => {
      dispatch(receiveCreateProduct(data));
    });
  };
}
