import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
    ${styles.link} ${isActive ? styles.destacado : ""}
`}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
