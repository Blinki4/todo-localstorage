import './styles/normalize.css'
import './styles/App.css'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
