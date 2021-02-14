import React from "react";

import AppBar from "components/AppBar";
import CardRestaurant from "components/CardRestaurant";
import RestaurantsPlaceholder from "components/Loader";
import Button from "@material-ui/core/Button";
import LineDegraded from "components/LineDegraded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Restaurant from "@material-ui/icons/Restaurant";
import FadeIn from "react-fade-in";
import styles from "./index.module.scss";

const Page = ({ restaurants, progress, changeFilter, history }) => {
  return (
    <div>
      {!progress ? (
        <FadeIn>
          <div className={styles.banner}>
            <div className={styles.banner_black}></div>
            <div className={styles.logo}>
              <div className={styles.logo_animation}>
                <Typography variant="h1" color="inherit" align="center">
                  <Box fontWeight="fontWeightLight" m={1}>
                    <Restaurant style={{ fontSize: 70 }} />
                    {"   MELP"}
                  </Box>
                </Typography>
              </div>
              <LineDegraded />
              <div className={styles.banner_text}>
                <Typography variant="h5" color="inherit" align="center">
                  <Box fontWeight="fontWeightLight" m={1} paragraph="true">
                    Aqui encontraras las mejores recomendaciones
                  </Box>
                </Typography>
                <div className={styles.icon_animation}>
                  <ArrowDropDownIcon style={{ fontSize: 40 }} />
                </div>
                <Button variant="outlined" color="inherit">
                  VER
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}
      <AppBar restaurants={restaurants} changeFilter={changeFilter} />
      <div className={styles.container}>
        <div>
          <Typography
            variant="h4"
            color="inherit"
            align="center"
            component="div"
            className={styles.title}
          >
            <Box fontWeight="fontWeightRegular" m={1}>
              Restaurantes
            </Box>
          </Typography>
          <LineDegraded black={true} />
          {!progress ? (
            <FadeIn>
              <div className={styles.container_restaurants}>
                {Object.values(restaurants).map((item, index) => (
                  <CardRestaurant
                    id={item.id}
                    name={item.name}
                    street={item.address ? item.address.street : null}
                    city={item.address ? item.address.city : null}
                    state={item.address ? item.address.state : null}
                    phone={item.contact ? item.contact.phone : null}
                    email={item.contact ? item.contact.email : null}
                    rating={item.rating}
                    push={history.push}
                    key={index}
                  />
                ))}
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className={styles.container_restaurants}>
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
