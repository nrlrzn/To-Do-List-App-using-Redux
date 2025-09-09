import { useTodoStore } from '../store/todoStore';
import { FilterType } from '../types/todoTypes';
import '../styles/components/todoFilters.scss';
import Button from './Button';

export default function TodoFilters() {
  const { filter, setFilter, clearCompleted } = useTodoStore();

  return (
    <div className="todo-filters">
      <Button
        className={filter === FilterType.ALL ? 'active' : ''}
        onClick={() => setFilter(FilterType.ALL)}
        label="All"
      />

      <Button
        className={filter === FilterType.ACTIVE ? 'active' : ''}
        onClick={() => setFilter(FilterType.ACTIVE)}
        label="Active"
      />

      <Button
        className={filter === FilterType.COMPLETED ? 'active' : ''}
        onClick={() => setFilter(FilterType.COMPLETED)}
        label="Completed"
      />

      <Button
        onClick={clearCompleted}
        className="clear"
        label="Clear Completed"
      />
    </div>
  );
}
