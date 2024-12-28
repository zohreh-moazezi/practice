import logo from '@assets/logo.png';
import { useStyles } from './styled';

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={logo} className={classes.img} alt="logo" />
    </div>
  );
};

export default Logo;
