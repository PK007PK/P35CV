import React from 'react';
import "./src/normalize.css"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "./src/assets/scss/mdb-free.scss"

import { AppProvider } from './src/AppProvider';

export function wrapRootElement({ element }) {
  return <AppProvider>{element}</AppProvider>;
}