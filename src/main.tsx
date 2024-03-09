import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/TODOcalendar">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainer position="bottom-center" autoClose={5000}
       />
  </React.StrictMode>,
)
