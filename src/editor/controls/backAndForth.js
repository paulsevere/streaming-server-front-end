import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconStyle from './IconButtonStyle'


export const ArrowButtons = ({back, forth, show}) => (
  <div className="arrow-buttons">
    <IconButton className="icon-button" {...IconStyle}>
      <ArrowBack/>
    </IconButton>
    <IconButton className="icon-button" {...IconStyle}>
      <ArrowForward />
    </IconButton>

  </div>
);
