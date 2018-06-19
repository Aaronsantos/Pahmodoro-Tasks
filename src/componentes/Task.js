import React from "react";

export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.iniciar = this.iniciar.bind(this);
        this.fechar = this.fechar.bind(this);
    }
    iniciar() {
        this.setState({ modal: true })
    }

    fechar() {
        this.setState({ modal: false })
    }

    render() {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <article className="message is-warning is-medium">
                            <div className="message-header">
                                {this.props.title}
                                <div className="buttons">
                                    <a className="button is-primary" onClick={this.iniciar}>
                                        <span>Iniciar</span>
                                        <span className="icon is-small">
                                            <i className="fa fa-hourglass-start"></i>
                                        </span>
                                    </a>
                                    <a className="button is-primary">
                                        <span>Deletar</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-times"></i>
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
                <div className={this.state.modal ? "modal is-active" : "modal"}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">{this.props.title}</p>
                        </header>
                        <section class="modal-card-body">
                            {this.props.description}
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button" onClick={this.fechar}>Cancelar</button>
                        </footer>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}