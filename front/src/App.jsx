import './index.css'
import Rotas from '../src/Routers';
import { AuthProvider } from './components/Context/auth';

function App() {

  return (
    <div>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </div>
  )
}

export default App