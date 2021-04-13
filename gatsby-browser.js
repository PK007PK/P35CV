import React from 'react';
import './src/styles/normalize.css';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './src/styles/scss/mdb-free.scss';

import { AppProvider } from './src/AppProvider';

export function wrapRootElement({ element }) {
  return <AppProvider>{element}</AppProvider>;
}
