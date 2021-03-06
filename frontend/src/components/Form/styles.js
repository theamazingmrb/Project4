import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },

    paper: {
      padding: theme.spacing(2),
    },

    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    fileInput: {
      width: '50%',
      margin: '10px 0',
    },

    buttonSubmit: {
      marginBottom: 15,
    },
    
    
    palette: {
      primary: green,
      secondary: red,
    },
    

  }));
  