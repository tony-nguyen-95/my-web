import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import avt from "../Img/2.jpg";
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    // maxWidth: "80vw",
    textAlign: "center",
    borderRadius: "0%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        <Avatar
          alt="Nguyen Quoc Huy"
          src={avt}
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            height: "8.5vh",
            width: "8.5vh",
          }}
        />
        <Typography variant="h5" component="h2">
          Nguyen {bull} Quoc {bull} Huy
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p" style={{ marginTop: "10px" }}>
          Hi,
          <br />
          {"I am Huy - a web developer who is hightly interested JavaScript."}
          <br />
          {" My tech stack has been React and Angular."}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
