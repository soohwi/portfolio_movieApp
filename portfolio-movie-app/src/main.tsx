/**
 * main.tsx
**/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio_movieApp/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
)