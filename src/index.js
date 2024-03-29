import React from 'react';
import ReactDOM, {unstable_renderSubtreeIntoContainer} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


ReactDOM.render(
    //{/*<React.StrictMode>*/} зачем-то был этот тег
        <BrowserRouter>
            <Provider store={store}>
                <App

                    //state={state}
                    //dispatch={store.dispatch.bind(store)}
                    //store={store}
                />
            </Provider>
        </BrowserRouter>,
      //  {/*</React.StrictMode>,*/}
    document.getElementById('root')
);



//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
