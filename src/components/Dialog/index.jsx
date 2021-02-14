import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  const [value, setValue] = React.useState("alphabet");

  const handleClicFilter = () => {
    props.changeFilter(value);
    handleClose();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle>{"Filtros"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Puedes utilizar los siguientes filtros:
          </DialogContentText>
          <React.StrictMode>
            <RadioGroup
              aria-label="filter"
              name="filter1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="alphabet"
                control={<Radio color="primary" />}
                label="Alfabéticamente"
              />
              <FormControlLabel
                value="rating"
                control={<Radio color="primary" />}
                label="Calificación"
              />
            </RadioGroup>
          </React.StrictMode>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClicFilter} color="primary">
            Filtrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SimpleDialog;
