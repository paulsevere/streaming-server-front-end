import React, {Component} from 'react';

import AceEditor from './AceEditor';
import {connect} from 'react-redux';
import Menu from './Menu';
import Button from './Button';
import {Input} from './Input';
import {ArrowButtons} from './controls/backAndForth'
import {Controls} from './controls'
import {shuffleHistory} from './controls/editorHistory'
import './controls/controls.css';
import './editor_style.scss';


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
      histPos:0
        };
    this.rewind = shuffleHistory(1).bind(this);
    this.fastForward = shuffleHistory(-1).bind(this);

    window.editor = this;

  }
  onChange = (editorText) => {
    this.setState({editorText})
  }

  roomChange = (room_id)=>{
    this.props.router.push('/'+room_id)
  }

  pushUpdate = () => {
    this.props.dispatch({
    type: 'PUSH_TEXT',
    meta: {
      socket: {
        channel: 'PUSH_TEXT',
        room_id:this.props.params.room_id
      }
    },
    update: this.state.editorText
  })
}

  createBroadcast = () => {
    console.log(this.state.roomName)
  }

  componentWillReceiveProps({updates, params}) {
    console.log(this.props)
    if(params.room_id !== this.props.params.room_id){
      this.setState({
        editorText: ''
      })
    }
    else if (this.props.updates.length !== updates.length && this.props.updates.length) {
      console.log("COOOOOL")

      console.log(`this.props.updates.length : ${this.props.updates.length}`)
      console.log(`updates.length : ${updates.length}`)
      if(this.state.editorText === updates[0]){
        this.setState({histPos:0})
      }else{
      this.setState({
        histPos:this.state.histPos + updates.length - this.props.updates.length
      });
    }
      // this.goBack = goBack(updates)
    } else if (this.props.updates.length !== updates.length) {
      this.setState({
        editorText:updates[0]
      });
    }

  }

  render() {
    return (
      <div className="editor-holder">
        <ArrowButtons updates={this.props.updates} histPos={this.state.histPos} rewind={this.rewind} fastForward={this.fastForward}/>
        <Controls updates={this.props.updates} pushUpdate={this.pushUpdate}  updateRoom={this.roomChange} />
        <Menu>
          <Input roomName={this.state.roomName} submit={this.setRoomName} hintText="room name"/>
          <Button text="broadcast">{this.createBroadcast}</Button>
          <Button text="push">{this.pushUpdate}</Button>
        </Menu>
        {AceEditor.bind(this)()}

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
