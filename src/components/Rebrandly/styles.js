import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#26384a",
    minHeight: "12vh"
  },
  input: {
    backgroundColor: "white"
    
  },
  secondInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  firstInput: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  lastInput: {
    display: "flex",
    alignItems: "center"
  },
  circle: {
    marginRight: "10px"
  },

  photo: {
    display: 'flex',
    justifyContent: 'center'

  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  infoText: {
    paddingBottom: "10px"
  },

  result1: {
    border: "1px solid black"
  },
  result0: {
    backgroundColor: "#c5c5c5",
    borderLeft: "1px solid black",
    borderRight: "1px solid black"
  }
}));

export default useStyles;
