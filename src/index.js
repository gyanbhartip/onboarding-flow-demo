import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './components/animated-routes/AnimatedRoutes';
import './form.css';
import './index.css';
import { AppProvider } from './utils/context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </AppProvider>
);