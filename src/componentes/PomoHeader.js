import React from "react";



export default class PomoHeader extends React.Component {

  render() {
    let icone = this.props.work == true ? 'fa fa-fire' : 'fa fa-coffe'

    return (<header className="hero">
      <h1 className="title is-1">
        <i className={icone} />
      </h1>
    </header>)
  }
}



