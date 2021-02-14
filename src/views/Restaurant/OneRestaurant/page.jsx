import React from "react";

import AppBar from "components/AppBarRestaurant";
import Map from "components/Maps";
import styles from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import LocationOn from "@material-ui/icons/LocationOn";
import Contacts from "@material-ui/icons/Contacts";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import Paper from "@material-ui/core/Paper";
import Reply from "@material-ui/icons/Reply";
import { Hidden } from "@material-ui/core";
import { FacebookShareButton } from "react-share";
import Button from "@material-ui/core/Button";

import Public from "@material-ui/icons/Public";
import { Link } from "react-router-dom";
const Page = ({ restaurant }) => {
  var stars = [];
  var key = 0;
  if (restaurant[0]) {
    for (let i = 0; i < 4; i++) {
      if (i >= restaurant[0].rating)
        stars.push(
          <StarBorder key={(key = key + 1)} style={{ fontSize: 30 }} />
        );
      else stars.push(<Star key={(key = key + 1)} style={{ fontSize: 30 }} />);
    }
  }
  return (
    <div>
      <AppBar />
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h4" color="inherit" align="center">
            <Box fontWeight="fontWeightRegular" m={1}>
              {restaurant[0] ? restaurant[0].name : null}
            </Box>
          </Typography>
          <div>
            <Typography variant="body1" noWrap>
              {stars}
            </Typography>
          </div>
        </div>
        <Paper className={styles.map}>
          <Map
            lat={restaurant[0] ? restaurant[0].address.location.lat : null}
            lng={restaurant[0] ? restaurant[0].address.location.lng : null}
          />
          <div>
            <Hidden xsDown>
              <div className={styles.info}>
                <div>
                  <div>
                    <Typography variant="h5" color="textPrimary">
                      <LocationOn style={{ fontSize: 20 }} />
                      {" Dirección"}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {restaurant[0]
                        ? restaurant[0].address.street +
                          ", " +
                          restaurant[0].address.city +
                          " " +
                          restaurant[0].address.state
                        : null}
                    </Typography>
                  </div>
                  <div className={styles.contact}>
                    <Typography variant="h5" color="textPrimary">
                      <Contacts style={{ fontSize: 20 }} />
                      {" Contacto"}
                    </Typography>
                    <div>
                      <Typography variant="h6" color="textSecondary">
                        <Phone style={{ fontSize: 17 }} />
                        {restaurant[0]
                          ? " " + restaurant[0].contact.phone
                          : null}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" color="textSecondary">
                        <Email style={{ fontSize: 17 }} />
                        {restaurant[0]
                          ? " " + restaurant[0].contact.email
                          : null}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.site}>
                    <Typography variant="h5" color="textPrimary">
                      <Public style={{ fontSize: 21 }} />
                      {" Sitio web"}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {restaurant[0] ? (
                        <Link to={restaurant[0].contact.site}>
                          {restaurant[0].contact.site}
                        </Link>
                      ) : null}
                    </Typography>
                  </div>
                  <div className={styles.container_btn}>
                    <FacebookShareButton
                      url={"https://www.nicosmexico.mx/"}
                      quote={
                        "La comida habla de nuestra cultura, herencia, raíces e influencias."
                      }
                    >
                      <Button
                        className={styles.btn_facebook}
                        variant="contained"
                        startIcon={<Reply />}
                        component="div"
                      >
                        compartir
                      </Button>
                    </FacebookShareButton>
                  </div>
                </div>
              </div>
            </Hidden>
            <Hidden smUp>
              <div className={styles.info}>
                <div>
                  <div>
                    <Typography variant="subtitle1" color="textPrimary">
                      <LocationOn style={{ fontSize: 20 }} />
                      {" Dirección"}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {restaurant[0]
                        ? restaurant[0].address.street +
                          ", " +
                          restaurant[0].address.city +
                          " " +
                          restaurant[0].address.state
                        : null}
                    </Typography>
                  </div>
                  <div className={styles.contact}>
                    <Typography variant="subtitle1" color="textPrimary">
                      <Contacts style={{ fontSize: 20 }} />
                      {" Contacto"}
                    </Typography>
                    <div>
                      <Typography variant="subtitle2" color="textSecondary">
                        <Phone style={{ fontSize: 17 }} />
                        {restaurant[0]
                          ? " " + restaurant[0].contact.phone
                          : null}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle2" color="textSecondary">
                        <Email style={{ fontSize: 17 }} />
                        {restaurant[0]
                          ? " " + restaurant[0].contact.email
                          : null}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.site}>
                    <Typography variant="subtitle1" color="textPrimary">
                      <Public style={{ fontSize: 21 }} />
                      {" Sitio web"}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {restaurant[0] ? (
                        <Link to={restaurant[0].contact.site}>
                          {restaurant[0].contact.site}
                        </Link>
                      ) : null}
                    </Typography>
                  </div>
                  <div className={styles.container_btn}>
                    <FacebookShareButton
                      url={"https://www.nicosmexico.mx/"}
                      quote={
                        "La comida habla de nuestra cultura, herencia, raíces e influencias."
                      }
                    >
                      <Button
                        className={styles.btn_facebook}
                        variant="contained"
                        startIcon={<Reply />}
                        component="div"
                      >
                        compartir
                      </Button>
                    </FacebookShareButton>
                  </div>
                </div>
              </div>
            </Hidden>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Page;
