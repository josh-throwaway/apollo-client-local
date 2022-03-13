import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
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
  }
}));

export default useStyles;
