import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <div className="box has-background-primary">
                                <h1 className="title is-1 is-uppercase has-text-weight-light">Pahmodoro tasks</h1>
                                <form onSubmit={this.props.click}>
                                    <div className="field">
                                        <div className="control">
                                            <label className="label">Título da tarefa</label>
                                            <input className="input is-small" type="text" placeholder="Aprender React" name="tarefa" required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="label">Descrição</label>
                                            <input className="textarea is-small " type="text" placeholder="Descrição" name="descricao" required/>
                                        </div>
                                    </div>
                                    <input type="submit" className="button is-warning" value="Salvar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



