import React, {Component} from 'react';

import AceEditor from './AceEditor';
import {connect} from 'react-redux';
import Menu from './Menu';
import Button from './Button';
import {Input} from './Input';
import {ArrowButtons} from './controls/backAndForth'
import {Controls} from './controls'
import './controls/controls.css';


var ID = function () {
  // return Math.random().toString(36).substr(2, 9);
  return window.location.pathname.slice(1)
};

class Editor extends Component {
  constructor(props) {
    super(props);
    // this.room_id = this.props.params.room_id || 'default'
    this.state = {
      editorText: props.updates[props.updates.length - 1]
        };
    window.editor = this;

  }
  onChange = (editorText) => {
    this.setState({editorText})
  }

  roomChange = (room_id)=>{
    this.props.router.push('/'+room_id)
  }

  update = () => this.props.dispatch({
    type: 'NEW_UPDATE',
    meta: {
      socket: {
        channel: '*',
        room_id:this.props.params.room_id
      }
    },
    update: this.state.editorText
  })

  createBroadcast = () => {
    console.log(this.state.roomName)
  }

  componentWillReceiveProps({updates, params}) {
    if(params.room_id !== this.props.params.room_id){
      this.setState({
        editorText: ''
      })
    }
    else if (this.props.updates.length !== updates.length) {
      this.setState({
        editorText: updates[updates.length - 1]
      })
    }

  }

  render() {
    return (
      <div className="editor-holder">
        <ArrowButtons/>
        <Controls updateRoom={this.roomChange} />
        <Menu>
          <Input roomName={this.state.roomName} submit={this.setRoomName} hintText="room name"/>
          <Button text="broadcast">{this.createBroadcast}</Button>
          <Button text="push">{this.update}</Button>
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
