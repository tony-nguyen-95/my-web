import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PdfCV from "../Assets/NguyenQuocHuyCV.pdf";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 620,
    textAlign: "left",
    borderRadius: "0%",
    marginTop: 82,
    fontSize: 28,
    zIndex: 99,
  },

  root2: {
    marginTop: 10,
    marginBottom: 10,

    fontSize: 18,
  },
  root3: {
    marginTop: 10,
    marginBottom: 10,

    fontSize: 18,
  },
});
const AboutCard = styled.div`
  position: relative;
  top: 0vh;
`;
export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // const onResumeClick = () => {
  //   return PdfCV;
  // };

  return (
    <AboutCard>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Nguyen {bull} Quoc {bull} Huy
          </Typography>

          <Typography className={classes.root2} variant="body2" component="h2">
            Hi, I am Huy.
            <br />
            {
              "I am a full-stack developer who is highly interested in JavaScript. Those techs what I have used is React, NodeJs, ExpressJs, MySQL."
            }
            <br />
            {
              "I am currently looking for a opportunity to thrive my career. Check out my résumé and projects blow."
            }
          </Typography>
          <hr />
          <Link
            color="inherit"
            href={PdfCV}
            target="_blank"
            className={classes.root3}
          >
            Click here to get my online résumé.
          </Link>
          <hr />
          <Link
            color="inherit"
            href="http://clone-movie-booking.surge.sh"
            target="_blank"
            className={classes.root3}
          >
            Click here to my clone movie-booking project.
          </Link>
        </CardContent>
      </Card>
    </AboutCard>
  );
}
