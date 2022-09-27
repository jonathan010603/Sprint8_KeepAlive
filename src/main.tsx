import './reset.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ContextWrapper } from './utils/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextWrapper>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ContextWrapper>
);
