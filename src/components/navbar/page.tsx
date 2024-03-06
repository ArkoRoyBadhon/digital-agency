import { navLink } from "@/mocks/page";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={`${styles.nav_section}`}>
      <div className={`${styles.logo_name}`}>Digital Agency</div>
      <div className={`${styles.nav_link_group}`}>
        {navLink &&
          navLink.map((item) => {
            return (
              <Link href={item?.link_name} key={item?.name} className={`${styles.nav_link}`}>
                {item?.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
