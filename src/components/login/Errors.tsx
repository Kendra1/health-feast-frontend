import React, { FunctionComponent } from 'react';

import { Typography, Grid } from '@material-ui/core';

export const Errors: FunctionComponent<{ errors: string[] }> = ({ errors }) => {
  return (
    <Grid item>
      {errors.map((error: string, id: number) => (
        <Typography key={`error_id_${id}`} color="error" variant="subtitle1">
          {error}
        </Typography>
      ))}
    </Grid>
  );
};
