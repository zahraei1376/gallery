
import { useState } from 'react';
import CardSaved from '../sevedBox/savedBox.component';
import { SaveContainer, SaveButton , MySaveButton , MySaveIcon, SaveIcon} from './savedImage.styles';

const SavedImages = ({setLocation}) =>{
    const handleLoaction = (e) =>{
    //     cursorX = e.pageX;
    // cursorY = e.pageY;
        // console.log('e.pageYe.pageY',e.pageY);
        setLocation({x:e.pageX , y:e.pageY});
    }
    return(
        <SaveContainer>
            <SaveButton><SaveIcon/></SaveButton>
            <MySaveButton onClick= {e =>{handleLoaction(e)}}><MySaveIcon/></MySaveButton>
            {/* <CardSaved fixed= {fixed ? fixed : null} /> */}
        </SaveContainer>
    )
};

export default SavedImages;