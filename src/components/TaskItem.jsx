function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li className={`p-3 border rounded flex justify-between items-center ${
        task.completed ? 'bg-gray-100 line-through text-gray-500' : 'bg-white'
      }`}>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mr-2 h-4 w-4"
          />
          <span>{task.title}</span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TaskItem;