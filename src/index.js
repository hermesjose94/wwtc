import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './index.css';
import App from './components/App'

const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT
};

const Aplication = () => (
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
);

ReactDOM.render(<Aplication />,
                 document.getElementById('root'));
serviceWorker.register();
