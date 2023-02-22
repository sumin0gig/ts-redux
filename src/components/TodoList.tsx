import React from 'react';
import { Todo } from '../modules/todos';

type TodoListProps={
	todos: Todo[];
	onToggle:(id:number)=>void;
	onRemove:(id:number)=>void;
}
type TodoItemProps={
	todo: Todo;
	onToggle:(id:number)=>void;
	onRemove:(id:number)=>void;
}
function TodoItem({todo,onToggle,onRemove}:TodoItemProps){
	return (
		<li style={{textDecoration: todo.isDone?"line-through":"none"}}>
			<span onClick={()=>onToggle(todo.id)}>{todo.text}</span>
			<button onClick={()=>onRemove(todo.id)}>X</button>
		</li>
	)
}

const TodoList = ({todos,onToggle,onRemove}:TodoListProps) => {
	return (
		<div>
			<ul>
				{todos.map(todo=><TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id}/>)}
			</ul>
		</div>
	);
};

export default TodoList;