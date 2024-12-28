import { useStyles } from "./styled";

const Text = () => {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <h6 className={classes.title}>Express back office</h6>
      <p className={classes.detail}>Enter username and password</p>
    </div>

  );
}

export default Text;
