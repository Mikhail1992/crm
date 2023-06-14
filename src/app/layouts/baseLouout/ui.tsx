import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Sidebar } from 'widgets/sidebar';
import classes from './index.module.css';

export const BaseLayout = () => {
  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} className={classes.content}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
