import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  // containerSpaceAround: {
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   marginTop: '10px 0 !important',
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column',
  //     flexWrap: 'wrap',
  //   },
  // },

  image: {
    borderRadius: '20px',
    boxShadow: '0.5em 0.5em 1em rgb(64, 64, 70)',
    maxWidth: '90%',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
