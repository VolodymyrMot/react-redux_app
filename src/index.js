import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import Header from './header';
import Menu from './menu';
import About from './about';
import Footer from './footer';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';

const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
    <div className="container">
        <Header />
        <div className="menu_content100">
            <div className="menu_content90">
                <Menu />
                <App />
                <About />
            </div>
        </div>
        <Footer />
    </div>
    </Provider>
   ,
    document.getElementById('root')
);
