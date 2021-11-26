import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/index';
import { Sepet } from './screens/sepet';
import { Provider, useStore } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import DT_Reducer from './redux/reducers/DT_Reducer'


const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  Reducer1: DT_Reducer,
})

const App = () => {

  const store = createStore(rootReducer, applyMiddleware(thunk))
 
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          
        />
          <Stack.Screen
          name="Sepet"
          component={Sepet}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
};

export default App;;


