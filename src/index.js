import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './utils/context/Context';
import App from './components/app/App';
import User from './components/user/User';
import Workspace from './components/workspace/Workspace';
import Type from './components/type/Type';
import Finish from './components/finish/Finish';
import './index.css';
import './form.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<User />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/type" element={<Type />} />
          <Route path="/finish" element={<Finish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);