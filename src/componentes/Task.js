import React from "react";

export class Task extends React.Component {
    render() {
        return (
            <div className="columns">
                <div className="column">
                    <article className="message is-warning is-medium">
                        <div className="message-header">
                            {this.props.title}
                            <div class="buttons">
                                <a class="button is-primary">
                                    <span>Iniciar</span>
                                    <span class="icon is-small">
                                        <i class="fa fa-hourglass-start"></i>
                                    </span>
                                </a>
                                <a class="button is-primary">
                                    <span>Deletar</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-times"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="message-body">
                            {this.props.description}
                        </div>
                    </article>
                </div>
            </div>

        )
    }
}