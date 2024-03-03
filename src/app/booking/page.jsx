import Image from "next/image";
import styles from "./booking.module.scss";
import TbaBox from "@/components/devStatus/tbaBox";

export const metadata = {
  title: "Booking",
  description: "_#",
};

const BookingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Booking Page</h2>

        <TbaBox />
      </div>
    </div>
  );
};

export default BookingPage;
