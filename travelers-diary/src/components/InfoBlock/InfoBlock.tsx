import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { useInfoBlockStyles } from "./infoBlockStyles";
import { TypeResort } from "./types";

export const InfoBlock: React.FC<TypeResort> = ({
  country,
  city,
  tags,
  description,
}) => {
  const classes = useInfoBlockStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='../../img.jpg'
          title={country}
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='h2'>
            {country}
          </Typography>
          <Typography variant='h5' component='p'>
            {city}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
          {tags.map((value, index) => {
            return <Chip label={value} key={index} />;
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
