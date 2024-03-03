import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.scss";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo/empire_logo_rainbow.png"
          alt="_#"
          height={53}
          width={190}
          className={styles.logoImg}
        />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
