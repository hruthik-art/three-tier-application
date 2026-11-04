import React from 'react';
import './UserList.css';

function UserList({ users, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (users.length === 0) {
    return (
      <div className="user-list-container">
        <div className="empty-state">
          <p>No users found. Add your first user above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <h2>Users ({users.length})</h2>
      <div className="user-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <h3>{user.name}</h3>
              <div className="user-actions">
                <button
                  onClick={() => onEdit(user)}
                  className="btn-icon btn-edit"
                  title="Edit user"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="btn-icon btn-delete"
                  title="Delete user"
                >
                  🗑️
                </button>
              </div>
            </div>
            <div className="user-card-body">
              <div className="user-info">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="user-info">
                <span className="info-label">Phone:</span>
                <span className="info-value">{user.phone}</span>
              </div>
              {user.createdAt && (
                <div className="user-info">
                  <span className="info-label">Created:</span>
                  <span className="info-value">{formatDate(user.createdAt)}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;

