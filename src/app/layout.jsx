import "./globals.css";
import "./reset.css";
import { poppins } from "./fonts";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
