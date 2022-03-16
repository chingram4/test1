console.log('Hello world!!! This is Webpack')
console.log('This is the second line')

import { store } from "./store"

console.log(store.getState())

import React from "react";
import reactDom from "react-dom";

import {Main} from "./components/Main"

// import {Dashboard} from './components/Dashboard'


reactDom.render(
    < Main />,
    document.getElementById("app")
);