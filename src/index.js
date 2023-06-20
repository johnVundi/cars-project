// import the React and ReactDom libraries
import './styles.css';
import 'bulma/css/bulma.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of that element

const root = createRoot(el);


root.render(
  <Provider store = {store}>
     <App />
  </Provider>
  
 );
