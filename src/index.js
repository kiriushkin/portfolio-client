import './index.scss';
import 'animate.css/animate.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { DarkTheme, BaseProvider } from 'baseui';
import App from './App';

const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={DarkTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </React.StrictMode>
);
