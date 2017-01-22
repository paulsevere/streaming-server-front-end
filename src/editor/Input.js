import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      edit: true
    }
  }
  componentWillReceiveProps({roomName}) {
    if (roomName) {
      this.setState({edit: false})
    }
  }
  render() {
    let style = {
      display: 'flex'
    };
    let {submit, hintText, roomName} = this.props;
    let onSubmit = () => {
      submit(this.state.value)
    }
    if (roomName && !this.state.edit) {
      return (
        <div style={style}>
          <FlatButton label={`room name: ${roomName}`} disabled={true}/>
          <FlatButton onTouchTap={() => this.setState({edit: true})} label="change"/>
        </div>
      )
    } else {
      return (
        <div style={style}>
          <TextField hintText={hintText} onChange={(e, value) => this.setState({value})}/>
          <FlatButton onTouchTap={onSubmit} label="set"/>
        </div>
      )
    }
  }
}
