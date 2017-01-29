import React from 'react';
import GearIcon from 'material-ui/svg-icons/action/settings';
import {Card} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import HelpIcon from 'material-ui/svg-icons/action/help-outline'
import IconStyle from './controls/IconButtonStyle'

let inlineIcon = {
  margin: 5,
  marginBottom: -5

}

let style = {
  padding: 30,
  display: 'flex'
}

export default class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    }
  }
  closeToolTip = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    let actions = [(<FlatButton label="close" primary={true} onTouchTap={this.closeToolTip}/>), (<FlatButton label="hide for good" primary={true} onTouchTap={() => {
      window.localStorage.setItem('open', false);
      this.closeToolTip();
    }}/>)]
    return (
      <div>
        <IconButton onTouchTap={this.closeToolTip} className="icon-button" {...IconStyle}>
          <HelpIcon/>
        </IconButton>

        <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.closeToolTip}>
          <p className="modal-p">Just start typing!</p>
          <p className="modal-p">
            If you want to persist any changes you've made and broadcast them to other users in the same "room", press
            <span className="modal-span">shift</span>
            and
            <span className="modal-span">enter</span>.
          </p>
          <p className="modal-p">
            <span>Touch the
            </span>
            <GearIcon style={inlineIcon}/>
            <span>
              to change your settings.
            </span>
          </p>
          <p className="modal-p">
            You can change which "room" you are in by updating the name in settings or navigating to a different URL. If the "room" you are in already exists, your editor will be populated with the most recent update to that code and you will have access to the room history.
          </p>
        </Dialog>

      </div>
    )
  }
}
