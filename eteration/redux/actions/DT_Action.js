import {
   DATA_TRANSFER
  } from './actionTypes'
  
  
  const Data_Transfer_Action = (data) => {
    return { type: DATA_TRANSFER, payload: data }
  }
  export default Data_Transfer_Action