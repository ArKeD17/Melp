import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./index.module.scss";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
import LocationOn from "@material-ui/icons/LocationOn";
import Contacts from "@material-ui/icons/Contacts";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";

function CardRestaurant(props) {
  var stars = [];
  var key = 0;
  for (let i = 0; i < 4; i++) {
    if (i >= props.rating)
      stars.push(<StarBorder key={(key = key + 1)} style={{ fontSize: 15 }} />);
    else stars.push(<Star key={(key = key + 1)} style={{ fontSize: 15 }} />);
  }

  return (
    <Paper className={styles.restaurant}>
      <Typography variant="h5">
        <Box fontWeight="fontWeightRegular">{props.name}</Box>
      </Typography>
      <div className={styles.info}>
        <Typography variant="body1" color="textPrimary">
          <LocationOn style={{ fontSize: 15 }} />
          {" Dirección"}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {props.street + ", " + props.city + " " + props.state}
        </Typography>
        <div className={styles.info}>
          <Typography variant="body1" color="textPrimary">
            <Contacts style={{ fontSize: 13 }} />
            {" Contacto"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <Phone style={{ fontSize: 13 }} />
            {" " + props.phone}
            <br />
            <Email style={{ fontSize: 12 }} />
            {" " + props.email}
          </Typography>
        </div>
      </div>
      <div className={styles.container_bottom}>
        <Button
          className={styles.ml}
          variant="text"
          color="primary"
          onClick={(e) => props.push(`/Melp/${props.id}`)}
        >
          ver
        </Button>
        <div className={styles.stars}>
          <Typography variant="body2" color="textPrimary">
            {"Calificación"}
          </Typography>
          <Typography variant="body1" noWrap>
            {stars}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default CardRestaurant;
