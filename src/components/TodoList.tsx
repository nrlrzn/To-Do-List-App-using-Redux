import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import '../styles/components/todoList.scss';
import {
  CloseOutlined,
  EditOutlined,
  CheckOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { Checkbox } from 'antd';

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, filter, editTodo } = useTodoStore();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState('');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditingTitle(title);
  };

  const handleSave = (id: number) => {
    if (editingTitle.trim()) {
      editTodo(id, editingTitle.trim());
    }
    setEditingId(null);
    setEditingTitle('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingTitle('');
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                className="edit-input"
                value={editingTitle}
                autoFocus
                onChange={(e) => setEditingTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSave(todo.id);
                  if (e.key === 'Escape') handleCancel();
                }}
              />

              <div className="todo-actions">
                <button
                  onClick={() => handleSave(todo.id)}
                  className="action-btn save-btn"
                >
                  <CheckOutlined />
                </button>
                <button
                  onClick={handleCancel}
                  className="action-btn cancel-btn"
                >
                  <CloseCircleOutlined />
                </button>
              </div>
            </>
          ) : (
            <>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              >
                <span className="todo-title">{todo.title}</span>
              </Checkbox>

              <div className="todo-actions">
                <button
                  onClick={() => handleEdit(todo.id, todo.title)}
                  className="action-btn edit-btn"
                >
                  <EditOutlined />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="action-btn delete-btn"
                >
                  <CloseOutlined />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
