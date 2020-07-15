import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import StoreConfig from './store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  
    <Provider store={StoreConfig.store}>
    <PersistGate loading={null} persistor={StoreConfig.persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
