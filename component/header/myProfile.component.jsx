import React from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {MyTypography ,FooterHeader,FooterHeaderText,FooterHeaderLink, ImageContainer, MyImage,} from './myProfile.styles';
import Divider from '@material-ui/core/Divider';
import myPic from '../../assets/img/myPic.jpg';

function PopupMyProfile() {

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <FooterHeader>
                <FooterHeaderText>
                    Built by <FooterHeaderLink {...bindTrigger(popupState)}>Zahra Alipour</FooterHeaderLink>.
                    Copyright &copy; by Zahra Alipour
                </FooterHeaderText>
            </FooterHeader>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
                <div>
                    <ImageContainer>
                        <MyImage src={myPic} layout="fill" objectFit="cover"/>
                    </ImageContainer>
                <MyTypography>طراحی سایت با زهرا علیپور</MyTypography>
              </div>
              <Divider />
              <MyTypography>متولد 1376/05/17</MyTypography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export  default PopupMyProfile;