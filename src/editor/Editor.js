import React, {Component} from 'react';

import AceEditor from './AceEditor';
import {connect} from 'react-redux';
import {ArrowButtons} from './controls/backAndForth'
import {Controls} from './controls'
import {shuffleHistory} from './controls/editorHistory'
import ToolTip from './ToolTip'
// import './controls/controls.scss';
// import './editor_style.scss';

// var ID = function () {
//   // return Math.random().toString(36).substr(2, 9);
//   return window.location.pathname.slice(1)
// };

class Editor extends Component {
  constructor(props) {
    super(props);
    // this.room_id = this.props.params.room_id || 'default'
    this.state = {
      editorText: props.updates[0],
      histPos: 0,
      toolTip: window.localStorage.getItem('open') !== "false"
    };
    this.rewind = shuffleHistory(1).bind(this);
    this.fastForward = shuffleHistory(-1).bind(this);

    window.editor = this;

  }
  onChange = (editorText) => {
    this.setState({editorText})
  }

  roomChange = (room_id) => {
    this.props.router.push('/' + room_id)
  }

  pushUpdate = () => {
    this.props.dispatch({
      type: 'PUSH_TEXT',
      meta: {
        socket: {
          channel: 'PUSH_TEXT',
          room_id: this.props.params.room_id
        }
      },
      update: this.state.editorText
    })
  }

  createBroadcast = () => {
    // console.log(this.state.roomName)
  }

  componentWillReceiveProps({updates, params}) {
    if (params.room_id !== this.props.params.room_id) {
      this.setState({editorText: ''})
    } else if (this.props.updates.length !== updates.length && this.props.updates.length) {

      // console.log(`this.props.updates.length : ${this.props.updates.length}`)
      // console.log(`updates.length : ${updates.length}`)
      if (this.state.editorText === updates[0]) {
        this.setState({histPos: 0})
      } else {
        this.setState({
          histPos: this.state.histPos + updates.length - this.props.updates.length
        });
      }
      // this.goBack = goBack(updates)
    } else if (this.props.updates.length !== updates.length) {
      this.setState({editorText: updates[0]});
    }

  }

  render() {
    return (
      <div className="editor-holder">
        <ArrowButtons updates={this.props.updates} histPos={this.state.histPos} rewind={this.rewind} fastForward={this.fastForward}/>
        <div style={{
          display: 'flex'
        }}>
          <Controls updates={this.props.updates} pushUpdate={this.pushUpdate} updateRoom={this.roomChange}/>
          <ToolTip open={this.state.toolTip}/>
        </div>
        {AceEditor.bind(this)()
}
      </div>
    );

  }
  Editor = () => AceEditor;

}

function mapStateToProps(state) {
  let {updates} = state;
  return {updates};
}

export default connect(mapStateToProps)(Editor);

// function mapDispatchToProps()
