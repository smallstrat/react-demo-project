import React from 'react';

import { Provider } from 'react-redux'
import store from '@/store'

import Test from '@/components/Test'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Test></Test>
      </div>
    </Provider>
  );
}

export default App;
