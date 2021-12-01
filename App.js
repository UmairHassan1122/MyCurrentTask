import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux';
import Navigator from './Navigator'
import rootReducer from './src/reducers';
import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    )
  }
}
const store = createStore(
  rootReducer,
);