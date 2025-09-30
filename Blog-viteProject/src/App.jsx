// src/App.jsx
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Login from './Components/admin/Login';
import Layout from './Pages/admin/Layout';
import Dashboard from './Pages/admin/Dashboard';
import AddBlog from './Pages/admin/AddBlog';
import ListBlog from './Pages/admin/ListBlog';
import Comments from './Pages/admin/Comments';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Admin Routes */}
                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path="addblog" element={<AddBlog />} />
                    <Route path="listBlog" element={<ListBlog />} />
                    <Route path="comments" element={<Comments />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;