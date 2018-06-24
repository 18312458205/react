import React, { Component } from 'react';

// 页面
import CommentBox from './comment/CommentBox.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox url="./comments.json" />
      </div>
    );
  }
}

export default App;
