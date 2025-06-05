import { AuthProvider } from './components/AuthContext'
import MainLayout from './components/MainLayout'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route 
            path="/*"
            element={
            <MainLayout>
              <Routes>
                <Route path="/trending" element={<Trending />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </MainLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App