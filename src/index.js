import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Expenses from './expenses';
import { rootShouldForwardProp } from '@mui/material/styles/styled';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
  </Routes>
</BrowserRouter>);
