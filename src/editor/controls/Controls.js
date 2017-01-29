import React from 'react';
import IconButton from 'material-ui/IconButton';
import GearIcon from 'material-ui/svg-icons/action/settings';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import IconStyle from './IconButtonStyle'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/**
 * Example of nested menus within an IconMenu.
 */
const overlayStyle	= {
  backgroundColor:'transparent'
}
const contentStyle = {
  boxShadow:"none"
}

class Controls extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false,
      language:'javascript',
      keyBinding:"shift enter"
    }

    this.tempRoomValue = '';
  }

  componentDidMount(){
    this.keypressListener = new window.keypress.Listener();
    window.Listener = this.keypressListener
    this.submitKey = this.keypressListener.simple_combo(this.state.keyBinding, this.props.pushUpdate);
  }
  toggleModal = ()=>{
    this.setState({open:!this.state.open})
  }
  submitRoomChange = ()=>{
    this.props.updateRoom(this.tempRoomValue);
  }
  handleRoomChange=(e, room_id)=>{
    this.tempRoomValue = room_id
  }
  handleKeyPressChange=(e, binding)=>{
    let bindings = ["shift enter","cmd enter","cmd shift enter"];
    let chosen = bindings[binding];
    this.submitKey.keys = chosen.split(" ");
    this.setState({keyBinding:chosen})
  }

  render(){
    return (<div>
      <IconButton onTouchTap={this.toggleModal} className="icon-button" {...IconStyle}> <GearIcon/> </IconButton>
        <Dialog
            className="modal"
            contentClassName="modal-body"
            overlayStyle={overlayStyle}
            contentStyle={contentStyle}
            onRequestClose={this.toggleModal}
            open={this.state.open}
          >
          <div className="">

              <TextField onChange={this.handleRoomChange}  hintText="room name"/>
              <RaisedButton onTouchTap={this.submitRoomChange} className="input-button" label="set name"/>

          </div>
          <div className="input-group">
          <SelectField
          floatingLabelText="Language"
          value={this.state.language}
          onChange={this.handleChange}
        >
          <MenuItem value={"javascript"} primaryText="javascript" />
          <MenuItem value={"java"} primaryText="java" />
          <MenuItem value={"html"} primaryText="html" />
          <MenuItem value={"golang"} primaryText="golang" />
          <MenuItem value={"c++"} primaryText="c++" />
        </SelectField>
        <SelectField
        floatingLabelText="key binding"
        value={this.state.keyBinding}
        onChange={this.handleKeyPressChange}
      >
        <MenuItem value={"shift enter"} primaryText="shift + enter" />
        <MenuItem value={"cmd enter"} primaryText="cmd + enter" />
        <MenuItem value={"cmd shift enter"} primaryText="cmd + shift + enter" />
      </SelectField>
    </div>
         </Dialog>
    </div>
    );
  }
}



export default Controls;
