import React from "react";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview">
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.preview) }} />
      </div>
    );
  }
}
