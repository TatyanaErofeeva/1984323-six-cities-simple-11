import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { offers } from './mocks/offers';
import {Provider} from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
);
