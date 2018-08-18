import React, {Component} from 'react';
import Comment from './Comment';
import './App.css';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {

        let filteredComments = this.props.comments.filter(
            (comment) => {
                return comment.author.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <div className="commentListBox">
                    <input className="filter-box"
                           type='text'
                           placeholder="Filter"
                           value={this.state.search}
                           onChange={this.updateSearch.bind(this)}
                    />
                    <ul className="CommentList">
                        {filteredComments.map((comment) => {
                            return <Comment key={comment.time} author={comment.author} text={comment.text}
                                            time={comment.time}
                                            gravatarImage={comment.gravatarImage}
                                            gravatarProfile={comment.gravatarProfile}/>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CommentList;