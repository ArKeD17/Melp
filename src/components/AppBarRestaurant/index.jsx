import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import style from "./index.module.scss";
import Button from "@material-ui/core/Button";
import RestaurantMenu from "@material-ui/icons/RestaurantMenu";
import { Link } from "react-router-dom";

const drawerWidth = 254;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  none: {
    display: "none",
  },
}));

function MyAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div className={style.container}>
            <RestaurantMenu style={{ fontSize: 35 }} />
            <div className={style.prueba}>
              <Typography variant="h6" component="div">
                Melp
              </Typography>
            </div>
          </div>
          <div className={style.container_btn}>
            <Link to="/" className={style.link}>
              <Button color="inherit">Regresar</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MyAppBar);
