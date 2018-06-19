import React from "react";
import { PomoHeader } from './PomoHeader';
import { Task } from './Task';
import { Input } from "./Input";

export class Body extends React.Component {

    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }
    
    addTarefaClick = event => {
        event.preventDefault();
        this.setState({ tasks: [...this.state.tasks, {title: event.target.tarefa.value, description: event.target.descricao.value} ] })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Input click={this.addTarefaClick}/>
                    {this.state.tasks.map((task) =>
                        <Task title={task.title} description={task.description} />
                    )}
                </div>
            </React.Fragment>
        )
    }
}