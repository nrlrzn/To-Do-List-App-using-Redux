import { create } from 'zustand';
import type { Todo } from '../types/todoTypes';
import { FilterType } from '../types/todoTypes';

interface TodoState {
  todos: Todo[];
  filter: FilterType;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  filter: FilterType.ALL,
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
  setFilter: (filter) => set(() => ({ filter })),
}));
