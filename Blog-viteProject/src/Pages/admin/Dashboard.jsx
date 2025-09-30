// src/Pages/admin/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    // Sample data - replace with actual data from your backend
    const stats = [
        { title: 'Blogs', count: 24, icon: '📝', color: '#667eea' },
        { title: 'Comments', count: 42, icon: '💬', color: '#48bb78' },
        { title: 'Drafts', count: 5, icon: '📄', color: '#ed8936' }
    ];

    const recentBlogs = [
        { id: 1, title: 'Getting Started with React', date: '2025-09-28', status: 'Published' },
        { id: 2, title: 'Advanced CSS Techniques', date: '2025-09-27', status: 'Published' },
        { id: 3, title: 'Node.js Best Practices', date: '2025-09-26', status: 'Draft' }
    ];

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
                            <span role="img" aria-label={stat.title}>{stat.icon}</span>
                        </div>
                        <div className="stat-details">
                            <h3>{stat.title}</h3>
                            <p className="stat-count">{stat.count}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="recent-blogs">
                <div className="section-header">
                    <h2>Recent Blogs</h2>
                    <Link to="/admin/listBlog" className="view-all">View All</Link>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentBlogs.map((blog) => (
                            <tr key={blog.id}>
                                <td>{blog.title}</td>
                                <td>{new Date(blog.date).toLocaleDateString()}</td>
                                <td>
                    <span className={`status-badge ${blog.status.toLowerCase()}`}>
                      {blog.status}
                    </span>
                                </td>
                                <td>
                                    <button className="action-btn unpublish-btn">Unpublish</button>
                                    <button className="action-btn delete-btn">🗑️</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;