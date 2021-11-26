import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Data_Transfer_Reducer from '../reducers/DT_Reducer'


const appReducer = combineReducers({
 reducer1:Data_Transfer_Reducer

})
const rootReducer = (state, action) => {
  if (action.type === 'DATA_TRANSFER') {
    state = undefined
  }
  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
  //whiteList: ['Page_Name_Reducer', 'User_Data_Reducer', 'Page_Name_Reducer']

}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistedStore = persistStore(store)
