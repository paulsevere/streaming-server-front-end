import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Badge from 'material-ui/Badge'

const style = {
  height: 'auto',
  width: 'auto',
  padding: "6px"
}



const iconStyle = {
  height: 35,
  width: 35,
  // iconHoverColor: '#55ff55'

}

const IconStyle={
  style,iconStyle
}



function SideBadge({badgeContent}){
  let style={
    padding:12,
    paddingBottom:24
  }
  let hidden={

    color:'rgba(242, 237, 236, 0.77)',
    backgroundColor:'transparent',
  }
  if(!badgeContent){
    return(
    <Badge  badgeStyle={hidden} style={style} badgeContent={badgeContent} >
    </Badge>
  )

  }
  return (
    <Badge primary={!!badgeContent} style={style} badgeContent={badgeContent} >
    </Badge>
  )
}

function ArrowButton(props){
  let {badgeNum} = props;
  let className = badgeNum ? "icon-button":"icon-button disabled";
  return (
    <IconButton primary={true} {...props} className={className}/>
  )
}


export const ArrowButtons = ({rewind, fastForward, show, updates, histPos}) => {
  let backNum = updates.length - histPos;
  let forNum = histPos;
  return (
    <div className="arrow-buttons">
      <SideBadge badgeContent={backNum}/>
      <IconButton onTouchTap={rewind} className="icon-button" {...IconStyle}>
        <ArrowBack/>
      </IconButton>
      <IconButton primary={true} onTouchTap={fastForward} className="icon-button" {...IconStyle}>
        <ArrowForward />
      </IconButton>
      <SideBadge badgeContent={forNum}/>

    </div>
  )
};
