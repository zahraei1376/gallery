

/////////////////////
import React from 'react';
import {Container , ImgContainer , Image , ParagContainer,Parags} from './wayBuy.styles';
import horseApp from '../../asset/img/horseApp.png';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepButton from '@material-ui/core/StepButton';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import {Title} from './wayBuy.styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     // fontSize:'7rem',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//     // fontSize:'7rem',
//   },
//   completed: {
//     display: 'inline-block',
//   },
//   instructions: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
// }));

// function getSteps() {
//   return ['ثبت نام', 'محصولات', 'انتخاب' , 'صورت حساب'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'گام اول : ثبت نام در سایت';
//     case 1:
//       return 'گام 2 : رفتن به بخش محصولات';
//     case 2:
//       return 'گام 3 : انتخاب محصول';
//     case 3:
//         return 'گام 4 : تسویه حساب';
//     default:
//       return 'Unknown step';
//   }
// }

// export default function WayBuy() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});
//   const steps = getSteps();

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? // It's the last step, but not all steps have been completed,
//           // find the first step that has been completed
//           steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   return (
//     <div className={classes.root} style={{margin:'15rem 0',}}>
//       <Title>مراحل خرید در سایت اسب من</Title>
//       <Stepper nonLinear activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label}  style={{fontSize:'8rem'}}>
//             <StepButton onClick={handleStep(index)} completed={completed[index]} style={{fontSize:'8rem'}}>
//               {label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted() ? (
//           <div style={{textAlign:'center',}}>
//             <Typography className={classes.instructions} style={{fontSize:'2rem'}}>
//               همه بخش ها تمام شد
//             </Typography>
//             <Button onClick={handleReset} style={{fontSize:'2rem'}}>تنظیم مجدد</Button>
//           </div>
//         ) : (
//           <div style={{textAlign:'center',fontSize:'2rem'}}>
//             <Typography className={classes.instructions} style={{fontSize:'2rem'}}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} style={{fontSize:'3rem'}}>
//                 قبلی
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 className={classes.button}
//                 style={{fontSize:'2rem',margin:'0 2rem'}}
//               >
//                 بعدی
//               </Button>
//                 {activeStep === steps.length &&
//                 (completed[activeStep] ? (
//                   <Typography variant="caption" className={classes.completed} style={{fontSize:'2rem'}}>
//                     گام ها کامل شد
//                   </Typography>
//                 ) : (
//                   ""
//                   // <Button variant="contained" color="primary" onClick={handleComplete} style={{fontSize:'2rem'}}>
//                   //   {completedSteps() === totalSteps() - 1 ? 'تمام' : 'گام تمام شد'}
//                   // </Button>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

const WayBuy = () =>{
    return(
      <Container>
          <ImgContainer>
            <Image src={horseApp} />
          </ImgContainer>
          
          <ParagContainer>
                <Parags>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی</Parags>
          </ParagContainer>
      </Container>
    )
};

export default WayBuy;