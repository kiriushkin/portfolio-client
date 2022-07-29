import './index.scss';
import 'animate.css/animate.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createDarkTheme } from 'baseui';
import App from './App';

const engine = new Styletron();

const overrides = {
  colors: {
    backgroundPrimary: '#161613',
    contentPrimary: '#f6f8ff',
    contentInversePrimary: '#21211c',
    borderOpaque: '#ebefff',
    borderSelected: '#4d4d42',
    backgroundWarning: '#e0dd00',
    backgroundPositive: '#188c4a',
    backgroundLightWarning: '#666400',
    backgroundLightPositive: '#126937',
    buttonPrimaryFill: '#f6f8ff',
    buttonPrimaryText: '#0f0f0f',
    buttonSecondaryFill: '#2C2C26',
    buttonSecondaryText: '#f6f8ff',
  },
};

const theme = createDarkTheme(undefined, overrides);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </React.StrictMode>
);
