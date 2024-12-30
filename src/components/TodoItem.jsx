import { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      onEdit(todo.id, editedText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-input"
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      <div className="todo-actions">
        <button onClick={handleEdit} className="edit-button">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}