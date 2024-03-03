"use client";

import { useState } from "react";
import styles from "./links.module.scss";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Booking",
    path: "/booking",
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "News",
    path: "/blog",
  },
  {
    title: "My Profile",
    path: "/account",
  },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setTimeout(() => {
      setOpen(false);
    }, 1000); // 1 second delay on closing the mobile menu
  };

  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "DevAdmin", path: "/admin" }} />
            )}

            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span class="material-symbols-outlined">menu</span>
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} onClick={closeMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
