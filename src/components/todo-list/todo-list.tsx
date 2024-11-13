interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    filteredTodos: Todo[];
    onLoadMore: () => void;
    hasMore: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ filteredTodos, onLoadMore, hasMore }) => {

    return (
        <div className='todo-container'>
            <div className="todo-list">
                {filteredTodos.map(todo => (
                    <div
                        key={todo.id}
                        className={`todo-card__item ${todo.completed ?
                            'todo-card__item--completed' :
                            'todo-card__item--not-completed'}`}>
                        <span className="todo-indicator"></span>
                        <span className="todo-card__text">{todo.title}</span>
                    </div>
                ))}
                </div>
                {hasMore && (

                    <button
                        className='load-more-button'
                        onClick={onLoadMore}
                    >
                        Show more todos
                    </button>
                )}
            </div>
    );
};

export default TodoList;
