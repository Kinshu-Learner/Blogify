import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import FullBlog from './components/FullBlog';
import { UserContextProvider } from './contexts/UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>

        <Navbar />
        <div className="flex w-full justify-center">
          <div className="flex max-w-screen-lg w-full py-10 px-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/blog/:id" element={<FullBlog />} />
            </Routes>
          </div>

        </div>

      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
