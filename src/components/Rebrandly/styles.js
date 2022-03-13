import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#26384a",
    minHeight: "12vh"
  },
  shortenUrlBtn: {
    minWidth: "250px"
  },
  input: {
    backgroundColor: "white",
    minWidth: "250px"
  },
  firstInput: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  secondInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "15px"
  },
  circle: {
    marginRight: "10px"
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
