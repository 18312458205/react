import React from 'react';

class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let author = this.refs.author.value;
    let text = this.refs.text.value;
    console.log(author, text);
    this.props.onCommentSubmit({ author, text, date: '刚刚' });
  }
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <input type="text" ref="author" placeholder="姓名" />
        </div>
        <div className="field">
          <textarea type="text" ref="text" placeholder="评论" />
        </div>
        <button className="ui button" type="submit">
          添加评论
        </button>
      </form>
    );
  }
}

export default CommentForm;
