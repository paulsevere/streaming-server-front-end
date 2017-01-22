import React from 'react'
import FlatButton from 'material-ui/FlatButton';

export default function({text, children}) {
  return (
    <div className='menu-holder'>
      <FlatButton label={text} onTouchTap={children}/>
    </div>
  )
}
