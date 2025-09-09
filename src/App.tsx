import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './styles/global.scss';

export default function App() {
  return (
    <div>
      <h1 className="todo-title">To-Do List using Zustand</h1>
      <TodoInput />
      <TodoList />
      <TodoFilters />
    </div>
  );
}
