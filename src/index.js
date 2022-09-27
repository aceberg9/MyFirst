import React from 'react';
import ReactDOM, {unstable_renderSubtreeIntoContainer} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntrireTree} from "./render";
import state from "./redux/state";

rerenderEntrireTree(state)
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
