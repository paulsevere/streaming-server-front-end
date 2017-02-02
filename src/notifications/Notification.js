import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showNotification} from './ShowNotification'
import MatNot from 'react-materialui-notifications'

export function Notification({editorText}) {
  return (<MatNot desktop={true} transitionName={{
    leave: 'dummy',
    leaveActive: 'fadeOut',
    appear: 'dummy',
    appearActive: 'zoomInUp'
  }} transitionAppear={true} transitionLeave={true}/>);
}

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      last: null
    };
    document
      .querySelector('body')
      .ondblclick = () => this.notify("RAD")
  }
  notify = (msg) => showNotification(MatNot, () => null)(msg)
  componentWillReceiveProps({updates}) {
    if (updates[0] !== this.props.updates[0] && this.props.updates.length > 0) {
      this.notify(updates[0])
    }
  }
  render() {
    return (<MatNot desktop={true} transitionName={{
      leave: 'dummy',
      leaveActive: 'fadeOut',
      appear: 'dummy',
      appearActive: 'zoomInUp'
    }} transitionAppear={true} transitionLeave={true}/>);
  }

}
function mapStateToProps(state) {
  let {updates} = state;
  return {updates};
}

export default connect(mapStateToProps)(Notifications);
