import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBox from "@material-ui/core/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
    subtitle1: {
      marginBottom: 0,
    }
  } 
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExamples() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="ld">
       <div className="App">
         <header className="App-header">
           <AppBar color="secondary">
             <ToolBar>
               <IconButton>
                 <MenuIcon />
               </IconButton>
               <Typography variant="h6">
                 MUI Themeing
               </Typography>
               <Button>
                 Login
               </Button>
             </ToolBar>
           </AppBar>
           <Typography variant="h2" component="div">
            Welcome to MUI
           </Typography>
           <Typography variant="subtitle1">
            Learn how to use Material UI
           </Typography>
           <ButtonStyled />
           <CheckboxExamples />
           <ButtonGroup
             variant="contained"
             style={{ fontsize: 12 }}
             color="primary"
           >
             <Button startIcon={<SaveIcon />}>Save</Button>
             <Button startIcon={<DeleteIcon />}>Discard</Button>
           </ButtonGroup>
           <img src={logo} className="App-logo" alt="logo" />
        </header>
       </div>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
