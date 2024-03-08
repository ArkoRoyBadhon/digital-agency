"use client";
import { navLink } from "@/utils/mocks/page";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${styles.nav_section}`}>
      <div
        
        className={`${styles.logo_name}`}
      >
        Digital Agency
      </div>
      <div onClick={() => setIsOpen(true)} className={styles.burgerMenu}>
        <Image src="/images/Group 1.svg" alt="" width={20} height={15.6} />
      </div>
      <div
        className={`${
          isOpen ? styles.mobile_menu_view : styles.mobile_menu_hide
        }`}
      >
        <span onClick={() => setIsOpen(false)} className="">
          Close
        </span>

        <div className={styles.mobile_open_menu}>
          {navLink &&
            navLink.map((item) => {
              return (
                <Link
                  href={item?.link_name}
                  key={item?.name}
                  className={`${styles.nav_link}`}
                >
                  {item?.name}
                </Link>
              );
            })}
        </div>
      </div>
      <div className={`${styles.nav_link_group}`}>
        {navLink &&
          navLink.map((item) => {
            return (
              <Link
                href={item?.link_name}
                key={item?.name}
                className={`${styles.nav_link}`}
              >
                {item?.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
