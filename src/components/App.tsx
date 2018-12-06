import * as React from "react";

export class App extends React.Component<{}, UgaBuga>{

	constructor(props: any){
		super(props)

		this.state = {
			currentTask: "",
			tasks: []
		}
	}
	public handleSubmit(e: React.FormEvent<HTMLFormElement>): void{
		e.preventDefault();
        
		this.setState({
			tasks: [
			...this.state.tasks, 
			{
				id: this._timeInMiliseconds(),
				value: this.state.currentTask,
				completed: false
			}
			
			]
		})

		console.log(e)
	}

	public deleteTask(id: number): void{
		const filteredTasks: Array<ITask> = this.state.tasks.filter(
			(task: ITask) =>  task.id !== id
			);
		
		this.setState({
			tasks: filteredTasks
		})
	}

	public renderTasks(): JSX.Element[] {
      return this.state.tasks.map( (task: ITask, index: number) => {
      	return(

            <div key={ task.id }>
            	<span> { task.value } </span>
            	<button onClick={() => this.deleteTask(task.id)}>Delete</button>

            </div>
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

	private _timeInMiliseconds(): number{
		const date: Date = new Date();
		return date.getTime();
	}
}

interface UgaBuga{
	currentTask: string;
	tasks: Array<ITask>;
}

interface ITask {
	id: number,
	value: string,
	completed: boolean

}












