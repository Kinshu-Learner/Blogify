import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import FullBlog from './components/FullBlog';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="flex w-full justify-center">
        <div className="flex max-w-screen-lg w-full py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:blogId" element={<FullBlog />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
