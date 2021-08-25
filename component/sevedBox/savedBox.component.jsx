import { useState , useEffect } from 'react';
import {MyTypography , MySaveButton,MySaveIcon ,CloseButtonContainer,SaveBoxContainer,ImageSaveBox,ImageSaveBoxContainer,SaveBoxImage,TiTleSaveBox, SeeAllButton,SaveCloseButton,SaveCloseIcon,SavedBoxContainer, SavedBox, SavedImage, SavedTitle} from './savedBox.styles';
const savedImages = [
  {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'},
   {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'},
   {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'},
   {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'},
   {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'},
   {src : "/img/bunny/bunny-1.jpg" , title: 'سلاممم'}
  ]

const CardSaved = ({location , setLocation}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return(
    <SavedBoxContainer location={location} width = {width} >
        <CloseButtonContainer>
          <SaveCloseButton onClick = {() => setLocation({})}>
              <SaveCloseIcon/>
          </SaveCloseButton>
        </CloseButtonContainer>
        
        <ImageSaveBoxContainer>
          <ImageSaveBox>
            {
              savedImages.map((image , index) =>(
                <SaveBoxContainer key={index}>
                    <TiTleSaveBox>{image.title}</TiTleSaveBox>
                    <SaveBoxImage src = {image.src} />
                </SaveBoxContainer>
              ))
            }
          </ImageSaveBox>
          
          <SeeAllButton>نمایش</SeeAllButton>
        </ImageSaveBoxContainer>
        
    </SavedBoxContainer>
  )
};

export default CardSaved;