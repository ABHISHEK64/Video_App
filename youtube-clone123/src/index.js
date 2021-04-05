import React from 'react';
import App from './App';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store'
import './_Base.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDom.render(
<Provider store={store}>
   <Router>
   <App/>
    </Router> 

</Provider>


,document.getElementById("root")) 