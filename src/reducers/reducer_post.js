import underscore from 'underscore';
import _ from 'lodash';
import {FETCH_POST,GET_POST,DELTE_POST} from '../actions/type';



export default function(state = {}, action) {
  switch (action.type) {
    case DELTE_POST:
    return _.omit(state,action.payload)
    case FETCH_POST:
    return _.indexBy(action.payload.data, 'id');
    case GET_POST:
    return {...state, [action.payload.data.id]:action.payload.data};
    default:
    return state
  }
}
