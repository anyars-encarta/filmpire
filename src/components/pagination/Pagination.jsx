import React from 'react';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Pagination = ({ page, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </Button>

      <Typography variant="h4" className={classes.pageNumber}>
        {' '}
        {page}
      </Typography>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
    // <Box display="flex" justifyContent="center" mt="20px">
    //   <Button
    //     onClick={() => setPage(page - 1)}
    //     disabled={page === 1}
    //     variant="contained"
    //   >
    //     Previous
    //   </Button>

  //   <Typography variant="h6" margin="0 10px">
  //     {' '}
  //     {page}
  //   </Typography>

  //   <Button
  //     onClick={() => setPage(page + 1)}
  //     variant="contained"
  //   >
  //     Next
  //   </Button>
  // </Box>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
