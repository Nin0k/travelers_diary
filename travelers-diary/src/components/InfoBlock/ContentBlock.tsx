import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { InfoBlock } from './InfoBlock';
import { TypeResort } from './types';
import { useContentBlockStyles } from './infoBlockStyles';
import { RootState } from '../../store/store';
import { getAllResorts } from './../../store/ResortReducer/thunks';

export const ContentBlock: React.FC = () => {
  const classes = useContentBlockStyles();
  const spacing: GridSpacing = 2;
  const resorts = useSelector((state: RootState) => state.reducer.allResorts);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getAllResorts());
  }, []);

  return (
    <Grid container className={classes.root} spacing={spacing}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={spacing}>
          {resorts.map((value: TypeResort, index: number) => (
            <Grid item key={index}>
              <InfoBlock {...value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
