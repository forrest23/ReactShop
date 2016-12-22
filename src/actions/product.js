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

export function requestGetProducts() {
  return {
    type: types.GET_PRODUCTS,
  };
}

export function receiveGetProducts(data) {
  return {
    type: types.RECEIVE_GET_PRODUCTS,
    payload: data,
  };
}

export function getProducts() {
  return (dispatch) => {
    dispatch(requestGetProducts());

    return restApi.getProducts()
    .then(data => {
      dispatch(receiveGetProducts(data));
    });
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



