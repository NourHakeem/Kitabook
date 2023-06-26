import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Router>
    <App />
  </Router>
  </StrictMode>,
);

reportWebVitals();
