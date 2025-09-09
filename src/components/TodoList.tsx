import { useTodoStore } from '../store/todoStore';
import '../styles/components/todoList.scss';
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          >
            <span className="todo-title">{todo.title}</span>
          </Checkbox>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <CloseOutlined style={{ fontSize: '18px', color: '#e50914' }} />
          </button>
        </li>
      ))}
    </ul>
  );
}
