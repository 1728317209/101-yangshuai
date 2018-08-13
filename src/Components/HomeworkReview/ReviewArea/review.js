import React, { Component } from 'react';
import { Button, Mention } from 'antd';
import './index.css';
const { toString, toContentState } = Mention;

export default class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    handleChange = (editorState) => {
        console.log(toString(editorState))
        this.setState({
            value: toString(editorState)
        });
    }

    onSelect = (suggestion) => {
    this.setState({
        suggestion: suggestion
    });
}

handleClick = () => {
    if (this.state.value) {
        const { Actions, homeworkId, TabKey } = this.props;
        const time = Date.parse(new Date()) / 1000;
        Actions.handleSendReviewComments(homeworkId, this.state.value, time, TabKey)
        this.setState({
            value: '',
        });
    } else {
        alert('NO REVIEW!')
    }
}

    getContents = (comments) => {
        const contents = comments.map(comment => comment.content)
        const suggestions = [...new Set(contents)];
        return suggestions;
    }

    render() {
        const { comments } = this.props;
        const suggestions = this.getContents(comments);
        return (
            <div className="big-div">
                <Mention
                    style={{ width: '100%' }}
                    onChange={this.handleChange}
                    defaultValue={toContentState('')}
                    suggestions={suggestions}
                    prefix=''
                    onSelect={this.onSelect}
                />
                <div className="button">
                    <Button onClick={this.handleClick}>发送</Button>
                </div>
            </div>
        );
    }
}