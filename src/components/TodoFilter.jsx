export default function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="todo-filter">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}