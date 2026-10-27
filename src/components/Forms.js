
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        };
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        alert(
            `Username: ${this.state.userName}\n` +
            `Comments: ${this.state.comments}\n` +
            `Topic: ${this.state.topic}`
        );
    };

    render() {
        const { userName, comments, topic } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={userName}
                        onChange={this.handleUserNameChange}
                    />
                </div>

                <br />

                <div>
                    <label>Comments: </label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>

                <br />

                <div>
                    <label>Topic: </label>
                    <select
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <br />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
