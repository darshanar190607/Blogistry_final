// src/Pages/admin/Layout.jsx
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const Layout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>Quickblog</h2>
                </div>
                <nav>
                    <ul>
                        <li className="active">
                            <Link to="/admin">
                                <span className="icon">📊</span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addblog">
                                <span className="icon">✏️</span>
                                <span>Add blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/listBlog">
                                <span className="icon">📋</span>
                                <span>Blog lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/comments">
                                <span className="icon">💬</span>
                                <span>Comments</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="main-content">
                <header className="admin-header">
                    <div></div>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </header>

                <main className="content-wrapper">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;