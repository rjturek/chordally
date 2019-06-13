import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import './index.css'

import App from './components/App'
import store from "./store"

//Serves assets from cache - Maybe enable later
//import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, app);

//registerServiceWorker();
