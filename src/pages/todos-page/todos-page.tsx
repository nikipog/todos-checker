import React, { useState, useEffect, useRef } from 'react';
import { fetchTodos } from '../../services/todos-fetching';
import UserList from '../../components/user-list/user-list';
import TodoList from '../../components/todo-list/todo-list';

const TODOS_TO_SHOW = 5;

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [visibleTodos, setVisibleTodos] = useState(TODOS_TO_SHOW);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const prevUserId = useRef<number | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (error: unknown) {
                setError(error instanceof Error ? error : new Error('Unknown error occurred'));
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const uniqueUserIds = Array.from(new Set(todos.map(todo => todo.userId)));

    function onUserClick(userId: number) {
        if (prevUserId.current !== userId) {
            setVisibleTodos(TODOS_TO_SHOW); // Сброс отображения задач до начального значения
        }

        setSelectedUserId(userId);

        prevUserId.current = userId;
    }

    const handleLoadMoreTodos = () => {
        setVisibleTodos(prevVisible => prevVisible + TODOS_TO_SHOW);
    };

    const filteredTodos = todos.filter(todo => todo.userId === selectedUserId).slice(0, visibleTodos);

    return (
        <div className="todos-page">
            <h1 className="todos-page__title">Todos List</h1>
            <div className="todos-page__content">
                <UserList userIds={uniqueUserIds} onUserClick={onUserClick} />
                {selectedUserId && (
                    <TodoList
                    filteredTodos={filteredTodos}
                    onLoadMore={handleLoadMoreTodos}
                    hasMore={filteredTodos.length < todos.filter(todo => todo.userId === selectedUserId).length}
                />)
                }
            </div>

        </div>
    );
};

export default TodosPage;

