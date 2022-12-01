import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import { store } from './store';
import {fetchOffersListAction, checkAuthAction} from './store/api-actions/api-actions';
import 'react-toastify/dist/ReactToastify.css';
store.dispatch(checkAuthAction());
store.dispatch(fetchOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
