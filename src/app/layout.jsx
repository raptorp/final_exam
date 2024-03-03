import { Open_Sans } from "next/font/google";
import "./globals.scss";
import "./globalicons.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Empire LRP Homepage",
    template: "%s | Empire LRP",
  },
  description: "_#",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="wrapper">
          <Navbar />
          <div className="container">
            {children}

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
