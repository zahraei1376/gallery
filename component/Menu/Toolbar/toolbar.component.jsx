import React from 'react';
import { connect } from 'react-redux';
import {ToolbarContainer,MyCloseIcon,ArrowIcon,ArrowIconButton,} from './toolbar.styles';
//////////////////////////////////////////////////////////////
const Toolbar = (props) =>{
  return(
    <ToolbarContainer>
        <ArrowIconButton onClick={() =>props.setClicked(!props.clicked)}>
           {props.clicked ? <MyCloseIcon/> : <ArrowIcon/>}
        </ArrowIconButton>
    </ToolbarContainer>
  )
}

const mapStateToProps = state => ({
  currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(Toolbar);
