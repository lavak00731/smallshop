import { BrowserRouter } from 'react-router-dom';
import { RouterComp } from './routes/RouterComp';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterComp />
      </BrowserRouter>
    </>
  )
}

export default App
