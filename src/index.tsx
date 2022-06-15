import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Dashboard from './components/user/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dashboard/>
  </React.StrictMode>
);

