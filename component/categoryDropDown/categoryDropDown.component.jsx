import React , {useState,useEffect} from 'react';
// import { makeStyles ,createMuiTheme } from '@material-ui/core/styles';
import { makeStyles,createTheme, ThemeProvider,createMuiTheme ,MuiThemeProvider,CssBaseline} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {MySelect ,MyMenuItem} from './categoryDropDown.styles';
////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'50% !important',
    color:'#000 !important',
    textAlign:'center',
    padding:'2rem 0',    
  },
}));

const CategoryDropDown = ({setParentCategoryId , Items}) => {
  const classes = useStyles();
  const [items, setItem] = useState(Items && Items.length > 0 && Items[0] ? Items[0] : '');
  ////////////////////////////////////////////
  useEffect(()=>{
    setParentCategoryId(Items[0]);
  },[])

  const handleChange = (event) => {
    setItem(event.target.value);
    setParentCategoryId(event.target.value);
  };
 
  return (
      <FormControl 
       className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={items}
          onChange={handleChange}
          label="دسته بندی"
          variant="outlined"
        >
          {
                Items.map((item, index)=>{
                    return(
                        <MyMenuItem key={index} 
                        value={item}
                        >{item.title}</MyMenuItem>
                    )
                })
          }
        </MySelect>
      </FormControl>
  );
}

export default CategoryDropDown;
