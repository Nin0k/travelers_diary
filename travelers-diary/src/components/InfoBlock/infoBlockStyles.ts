import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useInfoBlockStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  description: {
    height: 200,
    overflow: 'hidden',
  },
});

export const useContentBlockStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 10,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);
