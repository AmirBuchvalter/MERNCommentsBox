import React, {Component} from 'react';
import axios from 'axios';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './App.css';

class CommentBox extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:9002/api/createdb')
            .then((response) => {
                this.setState({comments: response.data});
            });
    }


    handleOnSubmit(commentText, authorText) {
        let currentTime = new Date();
        axios.post('http://localhost:9002/api/senddata', {author: authorText, text: commentText, time: currentTime})
            .then((response) => {
                let comment = {
                    author: authorText, text: commentText, gravatarImage: response.data.gravatarImage
                    , gravatarProfile: response.data.gravatarProfile, time: currentTime
                };
                this.setState({comments: this.state.comments.concat(comment)});
            });

    }

    render() {
        return (
            <div className="CommentBox">
                <CommentList comments={this.state.comments}/>
                <CommentInput onCommentSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

export default CommentBox;