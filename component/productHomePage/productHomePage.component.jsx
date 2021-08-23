import React from 'react';
import {ProductContainer ,ProductBox ,ProductImage ,ProductTitle,ProductBtn ,ProductBtnContainer,
    ProductImageTextContainer,ProductImageText,ProductContainerTitle,ProductBoxes,
    SpanVisible,SpanInvisible,Btn,ProductContainerRight,ProductContainerLeft,
    TextContainer ,Text,TextSpan,SubDescriprion,ImageSContainer,ImageProductSection,
    ImageBox,ProductButton,ImageContainer,TitleImage,SubTitleImage,ProductLinkContainer,ProductLink} from './productHomePage.styles';
import dogPic1 from '../../assets/img/dog2.jpg';
import dogPic2 from '../../assets/img/dog3.jpg';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'next/image';
// import { TextContainer ,Text,TextSpan,SubDescriprion} from '';
// import pic1 from '../../assets/img/horse6.jpg';
// import pic2 from '../../assets/img/horse7.jpg';
// import pic3 from '../../assets/img/horse12.jpg';

// import pic1 from '../../asset/img/horse6.jpg';
// import pic2 from '../../asset/img/horse7.jpg';
// import pic3 from '../../asset/img/horse12.jpg';

// const ProductForHomePage = () =>{
//     return (
//         <ProductContainer>
//             <ProductContainerTitle>اسب خود را بهتر بشناسید</ProductContainerTitle>
//             <ProductBoxes>
//             <ProductBox>
//                 {/* <div>
//                 <ProductImage src={pic1} />
//                 </div> */}
//                 <ProductImage src={pic1} />
//                 <ProductImageTextContainer>
//                 <ProductImageText>با ما اسب خود را بهتر بشناسید</ProductImageText>
//                 </ProductImageTextContainer>
//                 <ProductTitle>رنگها و الگوهای پوست اسب</ProductTitle>
//                 <ProductBtnContainer>
//                     {/* <ProductBtn>بیشتر</ProductBtn>
//                     <ProductBtn>افزودن</ProductBtn> */}
//                     <Btn>
//                         <SpanVisible>بیشتر</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                     <Btn>
//                         <SpanVisible>افزودن</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                 </ProductBtnContainer>
//             </ProductBox>
//             <ProductBox>
//                 <ProductImage src={pic3} />
//                 <ProductImageTextContainer>
//                     <ProductImageText>سلامتی اسم خود را به ما بسپارید</ProductImageText>
//                 </ProductImageTextContainer>
//                 <ProductTitle>سلامتی و خطر بیماری</ProductTitle>
//                 <ProductBtnContainer>
//                     {/* <ProductBtn>بیشتر</ProductBtn>
//                     <ProductBtn>افزودن</ProductBtn> */}
//                     <Btn>
//                         <SpanVisible>بیشتر</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                     <Btn>
//                         <SpanVisible>افزودن</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                 </ProductBtnContainer>
//             </ProductBox>
//             <ProductBox>
//                 <ProductImage src={pic2} />
//                 <ProductImageTextContainer>
//                     <ProductImageText>با ما اسب خود را بهتر بشناسید</ProductImageText>
//                 </ProductImageTextContainer>
//                 <ProductTitle>عملکرد و اصل و نسب</ProductTitle>
//                 <ProductBtnContainer>
//                     {/* <ProductBtn>بیشتر</ProductBtn>
//                     <ProductBtn>افزودن</ProductBtn> */}
//                     <Btn>
//                         <SpanVisible>بیشتر</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                     <Btn>
//                         <SpanVisible>افزودن</SpanVisible>
//                         <SpanInvisible>
//                             <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
//                                 <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
//                             </IconButton>
//                         </SpanInvisible>
//                     </Btn>
//                 </ProductBtnContainer>
//             </ProductBox>
//             </ProductBoxes>
            

//         </ProductContainer>
//     );
// };

const ProductForHomePage = () =>{
    return (
        <ProductContainer>
            <ProductContainerLeft>
                <ImageContainer>
                    <ImageBox>
                        <ImageProductSection  src={dogPic1} 
                            alt="Picture of the food"/>
                        <ProductLinkContainer>
                            <ProductLink>نمایش &rarr;</ProductLink>
                        </ProductLinkContainer>
                    </ImageBox>
                    <TitleImage>حیوانات</TitleImage>
                    <SubTitleImage>حیوانات +  تصاویر</SubTitleImage>
                </ImageContainer>
                <ImageContainer>
                    <ImageBox>
                        <ImageProductSection  src={dogPic2} 
                            alt="Picture of the big dog"/>
                        <ProductLinkContainer>
                            <ProductLink>نمایش &rarr;</ProductLink>
                        </ProductLinkContainer>
                            
                    </ImageBox>
                    <TitleImage>سگ های قوی</TitleImage>
                    <SubTitleImage>سگ های قوی +  تصاویر</SubTitleImage>
                </ImageContainer>
                {/* <ImageSContainer>
                    
                </ImageSContainer> */}

            </ProductContainerLeft>
            <ProductContainerRight>
                <ProductContainerTitle> نگریستن به زیبایی های دنیای طبیعت </ProductContainerTitle>
                <TextContainer>
                    <Text>طبیعت</Text><TextSpan/>
                </TextContainer>
                <SubDescriprion>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</SubDescriprion>
                <ProductButton>
                    نمایش کار های ما
                </ProductButton>
            </ProductContainerRight>
            
            {/* <ProductContainerTitle>اسب خود را بهتر بشناسید</ProductContainerTitle>
            <ProductBoxes>
            <ProductBox>
                <ProductImage src={pic1} />
                <ProductImageTextContainer>
                <ProductImageText>با ما اسب خود را بهتر بشناسید</ProductImageText>
                </ProductImageTextContainer>
                <ProductTitle>رنگها و الگوهای پوست اسب</ProductTitle>
                <ProductBtnContainer>
                    <Btn>
                        <SpanVisible>بیشتر</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                    <Btn>
                        <SpanVisible>افزودن</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                </ProductBtnContainer>
            </ProductBox>
            <ProductBox>
                <ProductImage src={pic3} />
                <ProductImageTextContainer>
                    <ProductImageText>سلامتی اسم خود را به ما بسپارید</ProductImageText>
                </ProductImageTextContainer>
                <ProductTitle>سلامتی و خطر بیماری</ProductTitle>
                <ProductBtnContainer>
                    <Btn>
                        <SpanVisible>بیشتر</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                    <Btn>
                        <SpanVisible>افزودن</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                </ProductBtnContainer>
            </ProductBox>
            <ProductBox>
                <ProductImage src={pic2} />
                <ProductImageTextContainer>
                    <ProductImageText>با ما اسب خود را بهتر بشناسید</ProductImageText>
                </ProductImageTextContainer>
                <ProductTitle>عملکرد و اصل و نسب</ProductTitle>
                <ProductBtnContainer>
                    <Btn>
                        <SpanVisible>بیشتر</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ArrowRightAltIcon style={{fontSize:'4rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                    <Btn>
                        <SpanVisible>افزودن</SpanVisible>
                        <SpanInvisible>
                            <IconButton style={{padding:'0'}} color="primary" aria-label="بیشتر" component="span">
                                <ShoppingCartIcon style={{fontSize:'3rem',color:'#fff'}} />
                            </IconButton>
                        </SpanInvisible>
                    </Btn>
                </ProductBtnContainer>
            </ProductBox>
            </ProductBoxes> */}
            

        </ProductContainer>
    );
};

export default ProductForHomePage;