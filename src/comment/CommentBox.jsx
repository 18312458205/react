import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getComments();
    // setInterval(() => this.getComments(), 5000);
  }
  handleCommentSubmit(comment) {
    console.log(comment);
    let comments = this.state.data;
    let newComments = comments.concat(comment);
    this.setState({ data: newComments });
  }
  getComments() {
    $.ajax({
      url: '/comments.json',
      dataType: 'json',
      success: comments => {
        this.setState({ data: comments });
        console.log(comments);
      },
      err: (xhr, status, err) => {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider" />
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export default CommentBox;
