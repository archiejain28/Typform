import { Button, Typography} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import Home from './Home';
import Logo from './Logo';



const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 119, 255)",
      contrastText: "#fff",
    },
  },
  typography:{
    button:{
        width:150,
        fontSize: 30,
        fontWeight: 700,
        textTransform:"none"
      }
  }
});

const useStyles = makeStyles((theme)=>({
    container: {
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        textAlign: "left",
        width: '1200px',
        height:'282px',
        top:'230px',
        left:'450px',
        
    },
}))

const LandingPage = () => {
  const classes = useStyles();
  const [agree, setAgree] = useState(false);

  const userAgreed = () => {
    setAgree(true);
  };
  
  return (
    
    <div>
     <Logo/>
      {agree ? (
        <div><Home /></div>
      ) : (
        <div className={classes.container}>
          <Typography variant="h4">
            <span style={{'display':'block','margin-bottom':'20px'}}>Up-skilling requires time commitment</span>
            <span style={{'color':'rgba(255, 255, 255, 0.7)','display':'block'}}>The GrowthX experience is designed by keeping in mind the working
            hours founders & full time operators typically work in. </span><br></br> 
            <span style={{'color':'rgba(255, 255, 255, 0.7)','display':'block'}}>You will spend</span> <span style={{'color':'rgba(255, 255, 255, 0.7)','display':'block'}}>- 6 hours/week for the first 5 weeks </span> <span style={{'color':'rgba(255, 255, 255, 0.7)','display':'block'}}>- 15 hours/week for the
            last 3 weeks</span>
          </Typography>
          <div style={{'margin-top':'20px'}}>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained" onClick={userAgreed} >
              I agree
            </Button>
            <Button color="primary" variant='text' onClick={userAgreed} style={{'color':'#fff','fontSize':'16px','fontFamily':'sans-serif'}}>
              press Enter↩
            </Button>
          </ThemeProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;