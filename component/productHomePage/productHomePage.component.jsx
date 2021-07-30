import React from 'react';
import {ProductContainer ,ProductBox ,ProductImage ,ProductTitle,ProductBtn ,ProductBtnContainer,
    ProductImageTextContainer,ProductImageText,ProductContainerTitle,ProductBoxes,
    SpanVisible,SpanInvisible,Btn} from './productHomePage.styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import pic1 from '../../assets/img/horse6.jpg';
// import pic2 from '../../assets/img/horse7.jpg';
// import pic3 from '../../assets/img/horse12.jpg';

import pic1 from '../../asset/img/horse6.jpg';
import pic2 from '../../asset/img/horse7.jpg';
import pic3 from '../../asset/img/horse12.jpg';

const ProductForHomePage = () =>{
    return (
        <ProductContainer>
            <ProductContainerTitle>اسب خود را بهتر بشناسید</ProductContainerTitle>
            <ProductBoxes>
            <ProductBox>
                {/* <div>
                <ProductImage src={pic1} />
                </div> */}
                <ProductImage src={pic1} />
                <ProductImageTextContainer>
                <ProductImageText>با ما اسب خود را بهتر بشناسید</ProductImageText>
                </ProductImageTextContainer>
                <ProductTitle>رنگها و الگوهای پوست اسب</ProductTitle>
                <ProductBtnContainer>
                    {/* <ProductBtn>بیشتر</ProductBtn>
                    <ProductBtn>افزودن</ProductBtn> */}
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
                    {/* <ProductBtn>بیشتر</ProductBtn>
                    <ProductBtn>افزودن</ProductBtn> */}
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
                    {/* <ProductBtn>بیشتر</ProductBtn>
                    <ProductBtn>افزودن</ProductBtn> */}
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
            </ProductBoxes>
            

        </ProductContainer>
    );
};



export default ProductForHomePage;