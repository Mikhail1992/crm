import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './index.module.css';
import { Logo } from 'shared/ui/logo';

export const Sidebar = () => {
  return (
    <aside className={classes.container}>
      <NavLink to='/' className={classes.logo}>
        <Logo />
      </NavLink>
      <nav className={classes.asideMenu}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(classes.menuItem, { [classes.menuItemActive]: isActive })
              }
              to={'/actions-panel'}
            >
              Actions Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(classes.menuItem, { [classes.menuItemActive]: isActive })
              }
              to={'/users'}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(classes.menuItem, { [classes.menuItemActive]: isActive })
              }
              to={'/projects'}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
