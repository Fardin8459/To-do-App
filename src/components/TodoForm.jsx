import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task.trim());
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}