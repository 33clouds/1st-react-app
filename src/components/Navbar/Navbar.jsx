import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <MyNavLink to='/profile'>Profile</MyNavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <MyNavLink to='/dialogs'>Messages</MyNavLink>
      </div>
      <div className={classes.item}>
        <MyNavLink to='/news'>News</MyNavLink>
      </div>
      <div className={classes.item}>
        <MyNavLink to='/music'>Music</MyNavLink>
      </div>
      <div className={classes.item}>
        <MyNavLink to='/settings'>Settings</MyNavLink>
      </div>
    </nav>
  );
}

const MyNavLink = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) =>
        isPending ? classes.pending : isActive ? classes.active : ""
      }
    >
    {props.children}
    </NavLink>
  );
}

export default Navbar;
