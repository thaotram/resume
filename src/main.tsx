import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './styles/index.scss';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
