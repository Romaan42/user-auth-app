import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

export const metadata = {
  title: "Roman khan",
  description: "Personal portfolio of Roman khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
