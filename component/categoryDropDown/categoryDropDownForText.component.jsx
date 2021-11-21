import React from 'react';
import { makeStyles,createTheme, ThemeProvider,createMuiTheme ,MuiThemeProvider,CssBaseline} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {MySelect ,MyMenuItem} from './categoryDropDown.styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold"
        },
        border:'1px solod #bf4f7b !important',
      }, 
      
      focused: {}
    }
  }
});
////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'50% !important',
    color:'#000 !important',
    textAlign:'center',
    backgroundColor:'#eee',
    borderRadius:'5px',
    select: {
      border:'1px solod #bf4f7b !important',
      "&$focused": {
          borderBottom: "3px solid #ff7730 !important",
        },

        focused: {}
      },

      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold"
        }
      }, 
      
      focused: {},

        select: {
          '&:before': {
              borderColor: '#3f87a6',
          },
          '&:after': {
              borderColor: '#3f87a6',
          }
      },
      icon: {
          fill:'#3f87a6',
      },
    
  },
}));

const CategoryDropDownForText = ({setCategoryId , Items}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };
 
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl 
       className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="دسته بندی"
          variant="outlined"
          className={classes.select}
        >
          {
            Items.map((item, index)=>{
                return(
                    <MyMenuItem key={index} 
                    value={item.id}
                    >{item.name}</MyMenuItem>
                )
            })
          }
        </MySelect>
      </FormControl>
      </MuiThemeProvider>
  );
}

export default CategoryDropDownForText;
