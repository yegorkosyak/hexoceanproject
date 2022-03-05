import {  combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const reducers = {
  // ... your other reducers here ...
  form: formReducer
}
const reducer = combineReducers(reducers)

export default reducer