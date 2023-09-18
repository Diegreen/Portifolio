import './sass/App.scss'
import { Header } from './components/Header'
import { PaginationContextProvider } from './context/PaginationContext'
import { ViewManager } from './views/View'

function App() {
  return (
    <PaginationContextProvider>
      <Header />
      <ViewManager />
    </PaginationContextProvider>
  )
}

export default App
