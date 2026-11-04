import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users. Make sure the backend is running.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      setError(null);
      const response = await axios.post(API_URL, userData);
      setUsers([...users, response.data]);
      return true;
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to create user';
      setError(errorMsg);
      return false;
    }
  };

  const handleUpdateUser = async (id, userData) => {
    try {
      setError(null);
      const response = await axios.put(`${API_URL}/${id}`, userData);
      setUsers(users.map(user => user.id === id ? response.data : user));
      setEditingUser(null);
      return true;
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to update user';
      setError(errorMsg);
      return false;
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    try {
      setError(null);
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to delete user';
      setError(errorMsg);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Three Tier Application</h1>
          <p>User Management System</p>
        </header>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="close-btn">×</button>
          </div>
        )}

        <UserForm
          user={editingUser}
          onSubmit={editingUser ? 
            (data) => handleUpdateUser(editingUser.id, data) : 
            handleCreateUser}
          onCancel={editingUser ? handleCancelEdit : null}
        />

        {loading ? (
          <div className="loading">Loading users...</div>
        ) : (
          <UserList
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        )}
      </div>
    </div>
  );
}

export default App;

