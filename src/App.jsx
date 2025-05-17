import { AuthProvider } from './components/AuthContext'
import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/trending" element={<Trending />} /> */}
          {/* <Route path="/movies" element={<Movies />} /> */}
          {/* <Route path="/tvshows" element={<TvShows />} /> */}
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
