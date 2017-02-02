import React from 'react'
import Message from 'material-ui/svg-icons/communication/message'
import moment from 'moment'

export function showNotification(Not, callback) {
  return (message) => {
    console.log(message)
    Not.showNotification({
      title: 'Title', additionalText: message, iconBadgeColor: "rgb(46, 98, 167)",
      // overflowText: "joe@gmail.com",
      timestamp: moment().format('h:mm A')
    })
    callback();
  }
}
