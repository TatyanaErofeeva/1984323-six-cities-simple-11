import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import {fetchOffersListAction} from './store/api-actions';
import { reviews } from './mocks/reviews';

//store.dispatch(checkAuthAction());
store.dispatch(fetchOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage/>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
);
