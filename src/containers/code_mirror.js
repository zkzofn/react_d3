import React, { Component }from 'react';
import Codemirror from 'react-codemirror';

class CodeMirror extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '// Code',
      options: {
        lineNumbers: true
      }
    };

    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(event) {
    this.setState({ code: event});
  }
  render() {
    return <Codemirror value={this.state.code} onChange={this.updateCode} options={this.state.options} />
  }
}


export default CodeMirror;