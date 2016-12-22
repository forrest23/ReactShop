import _ from 'lodash';
import * as types from '../constants';

export default function product(state = {}, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return Object.assign({}, state, { isGetFetching: true });
    case types.RECEIVE_GET_PRODUCTS:
      return Object.assign({}, state, {
        isGetFetching: false,
        rs: _.get(action, 'payload.products'),
      });
    case types.CREATR_PRODUCT:
      return Object.assign({}, state, { isFetching: true });
    case types.RECEIVE_CREATR_PRODUCT:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}
