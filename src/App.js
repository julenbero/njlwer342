import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
	state = {
		inputValue : '',
		todos      : []
	};

	handleChange = (e) => {
		this.setState({
			inputValue : e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let oldTodos = this.state.todos;
		this.setState({
			todos      : [ ...oldTodos, this.state.inputValue ],
			inputValue : ''
		});
	};

	render() {
		return (
			<div className="wrapper">
				<div className="list">
					<h3>Por hacer:</h3>
					<ul className="todo">
						<li>Sacar la ropa</li>
						<li>Hacer la cama</li>
						<li>Leer un rato</li>
						{this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
					</ul>
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<input
							type="text"
							id="new-task"
							placeholder="Ingresa una tarea y oprime Enter"
							value={this.state.inputValue}
							onChange={(e) => this.handleChange(e)}
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default App;

/* class App extends Component {
	constructor() {
	  super()
	  this.state = {
		tasks: ['sacar la ropa', 'hacer la cama', 'leer un rato'],
		newTask: ''
	  }
	}
	addTask(event) {
	  event.preventDefault()
	  let oldTasks = this.state.tasks
	  let newTask = this.state.newTask
	  this.setState({
		tasks: [...oldTasks, newTask],
		newTask: ''
	  })
	}
	updateTask(event) {
	  this.setState({
		newTask: event.target.value
	  })
	}
	render() {
	  return (
		<div class="wrapper">
		  <div class="list">
			<h3>Por hacer:</h3>
			<ul class="todo">
			  {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
			</ul>
			<form onSubmit={this.addTask.bind(this)}>
			  <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask.bind(this)}/>
			</form>
		  </div>
		</div>
	  )
	}
  } */
