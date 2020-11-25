import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
	state = {
		inputValue : '',
		todo       : null
	};

	handleChange = (e) => {
		this.setState({
			inputValue : e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			todo       : this.state.inputValue,
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
						{this.state.todo && <li>{this.state.todo}</li>}
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
