package com.todoList.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "Test "+idCounter, "Learn", new Date(), false));
		todos.add(new Todo(++idCounter, "Test "+idCounter, "Win in COD", new Date(), false));
		todos.add(new Todo(++idCounter, "Test "+idCounter, "Next Day", new Date(), false));
		todos.add(new Todo(++idCounter, "Test "+idCounter, "Ok", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo save(Todo todo, String username) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todo.setDone(false);
			todo.setUsername(username);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todo.setDone(false);
			todo.setUsername(username);
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo == null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(id == todo.getId()) {
				return todo;
			}
		}
		return null;
	}
}
