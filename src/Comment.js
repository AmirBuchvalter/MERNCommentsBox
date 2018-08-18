import React, {Component} from 'react';
import './App.css';

class Comment extends Component {
    popup() {
        let profileUrl ="";
        try {
            let profileData = this.props.gravatarProfile;
            console.log(JSON.stringify(profileData));
            profileUrl = profileData.entry[0].profileUrl;

        } catch (error) {
            console.log("gravatarProfile not available for the selected profile" , error);
            profileUrl = "No data available";
        }
        return alert("User Email: " + this.props.author
            + "\nComment post time: " + this.props.time
            + "\nGravatar user URL: " + profileUrl);
    }

    render() {
        return (
            <div className="comment-item">
                <div className="comment-author-img">
                    <img src={this.props.gravatarImage} onClick={() => {
                        this.popup()
                    }} alt=""/>
                </div>
                <div className="comment-author-text-content">
                    <div className="comment-author-text-content-email">{this.props.author}</div>
                    <div className="comment-author-text-content-message">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default Comment;