import React, { Component } from 'react';

class SetActive extends Component {
    constructor(props) {
        super(props);
        this.addActiveClass= addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div
                className={this.state.active ? 'active': null}
                onclick={this.toggleClass}
            >
                <p>{this.props.text}</p>
            </div>
        )
  }
}

export default SetActive;
