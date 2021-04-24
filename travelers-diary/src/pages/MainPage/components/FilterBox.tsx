import {
  Box,
  makeStyles,
  Grid,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => ({
  filterBox: {
    marginTop: "15px",
    border: "1px solid #949494",
    padding: "15px",
    borderRadius: "5px",
  },
}));

export const FilterBox: React.FC = () => {
  const classes = styles();
  const checkBoxes = [
    "Море",
    "Горы",
    "Достопремичательности",
    "Семейный отдых",
    "Активный отдых",
  ];
  return (
    <Box component='div' className={classes.filterBox}>
      <Typography variant='h6' color='textSecondary'>
        Поиск тура
      </Typography>
      <hr />
      <Grid container justify='space-between' wrap='wrap'>
        <Grid item lg={6} xl={6} sm={12} xs={12} md={6}>
          <TextField
            label='Название курорта'
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <TextField
            label='Страна'
            variant='outlined'
            fullWidth
            margin='normal'
          />
        </Grid>
        <Grid
          container
          item
          lg={5}
          xl={5}
          sm={12}
          xs={12}
          md={5}
          alignContent='space-around'
          justify='space-around'
        >
          {checkBoxes.map((item, index) => {
            return (
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={item}
                key={index}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
