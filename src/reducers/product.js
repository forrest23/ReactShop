import _ from 'lodash';
import * as types from '../constants';

export default function product(state = {}, action) {
  switch (action.type) {
    case types.CHANGE_TITLE_INPUT:
      return Object.assign({}, state, { title: _.get(action, 'payload') });
    case types.CHANGE_COST_PRICE_INPUT:
      return Object.assign({}, state, { costPrice: _.get(action, 'payload') });
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
