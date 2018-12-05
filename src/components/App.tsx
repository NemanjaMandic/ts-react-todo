import * as React from "react";

export class App extends React.Component<{}, UgaBuga>{

	constructor(props: any){
		super(props)

		this.state = {
			currentTask: "",
			tasks: []
		}
	}
	handleSubmit(e: any){
		e.preventDefault();
        
		this.setState({
			tasks: [...this.state.tasks, this.state.currentTask]
		})

		console.log(e)
	}

	renderTasks(){
      return this.state.tasks.map( (s: string, index: number) => {
      	return(

            <h3 key={index}> { s } </h3>
      	)
      })
	}

	render(){
		console.log(this.state)
		return(

          <div>
          	<h1>Reakt Typeskript toDo</h1>
          	<form onSubmit={ (e) => this.handleSubmit(e) } >

          		<input 
          		type="text" 
          		placeholder="Add a Task" 
          		value={ this.state.currentTask }
          		onChange={(e) => this.setState({currentTask: e.target.value })} />
          		<button type="submit">Add Task</button>
          	</form>

          
          	<section>
          		{ this.renderTasks() }
          	</section>
          </div>

		);
	}
}

interface UgaBuga{
	currentTask: string;
	tasks: Array<string>;
}