"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import styles from "./navLink.module.scss";

const NavLink = ({ item, onClick }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} 
        ${pathName === item.path && styles.active}`}
      onClick={onClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
