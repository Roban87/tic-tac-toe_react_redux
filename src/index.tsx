import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store';
import './fonts/Potta_One/PottaOne-Regular.ttf';
import './fonts/Open_Sans/OpenSans-Regular.ttf';
import './fonts/Open_Sans/OpenSans-Bold.ttf';
import './fonts/Open_Sans/OpenSans-Light.ttf';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
