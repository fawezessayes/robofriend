// Packages
import React from 'react';
import {render} from 'react-dom';
import 'tachyons';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger";

// Components
import { changeSearchFeild } from "./redux/reducers"
import App from './containers/App';
import './styling/style.css';

// Code
const logger = createLogger();
const store = createStore(changeSearchFeild, applyMiddleware(logger))

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));