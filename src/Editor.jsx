import React from "react";

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <textarea
          name=""
          id="editor"
          cols="30"
          rows="10"
          value={this.props.editor}
          onChange={this.props.changeText}
        />
      </div>
    );
  }
}
