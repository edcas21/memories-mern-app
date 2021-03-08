import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: '5px',
    margin: '30px 0',
    display: 'flex',
    padding: '10px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  image: {
    marginLeft: '15px',
  },
}));
