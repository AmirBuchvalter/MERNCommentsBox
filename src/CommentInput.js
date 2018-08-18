import React, { Component } from 'react';
import './App.css';

class CommentInput extends Component {

    handleOnSubmit(e) {
        let commentText = this.textInput.value;
        let authorText = this.authorInput.value;
        if (commentText) {
            this.props.onCommentSubmit(commentText,authorText);
            this.textInput.value = '';
            this.authorInput.value = '';
        }
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-input-textboxes">
                    <input className="input-email-text" ref={(ref) => this.authorInput = ref} type="email" placeholder="Email" required></input>
                    <textarea className="input-text-area" height="48" ref={(ref) => this.textInput = ref} type="text" placeholder="Message"></textarea>
                    <button className="submitButton" onClick={this.handleOnSubmit.bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;