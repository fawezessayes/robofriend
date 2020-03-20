// Packages
import React from 'react';
import {render} from 'react-dom';
import 'tachyons';
import { Provider } from "react-redux"
import { createStore } from "redux"

// Components
import { changeSearchFeild } from "./redux/reducers"
import App from './containers/App';
import './styling/style.css';

// Code
const store = createStore(changeSearchFeild)

render(<Provider store={store}><App store={store}/></Provider>, document.getElementById("root"));