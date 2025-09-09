import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import '../styles/components/todoInput.scss';
import Button from './Button';

export default function TodoInput() {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <Button onClick={handleAdd} label="Add" />
    </div>
  );
}
