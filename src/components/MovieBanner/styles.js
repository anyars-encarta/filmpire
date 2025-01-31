import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  bannerContainer: {
    height: '300px',
    padding: '20px',
    borderRadius: '20px',
    position: 'relative',
  },

  bannerText: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    maxWidth: '50%',
    lineClamp: 2,
    filter: theme.palette.mode === 'light' && 'invert(1)',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // zIndex: 1,
  },
}));
