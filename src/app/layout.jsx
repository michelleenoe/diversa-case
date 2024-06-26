import "./globals.css";
import "./reset.css";
import { poppins } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
