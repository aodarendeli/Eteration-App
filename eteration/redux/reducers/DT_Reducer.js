import {
    DATA_TRANSFER
  } from '../actions/actionTypes'
  
  const initial_data = {
    data: ['initial data']
  }
  const Data_Transfer_Reducer = (state = initial_data, action) => {
    switch (action.type) {
      case DATA_TRANSFER:
        return { ...state, data: action.payload, error: '' }
  
      default:
        return state
    }
  }
  export default Data_Transfer_Reducer