import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from "./store/store"

// Set a CSS variable --vh that equals 1% of the viewport height.
// This helps with mobile browsers where 100vh includes the address bar.
const setVh = () => {
  try {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  } catch {
    /* ignore in non-browser environments */
  }
};

setVh();
window.addEventListener('resize', setVh);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </StrictMode>,
)
