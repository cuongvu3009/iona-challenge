import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//redux
import { store } from './redux/store';
import { Provider } from 'react-redux';
//redux persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
