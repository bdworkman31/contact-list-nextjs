import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ContactProvider } from "./contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Manager",
  description: "Your Modern Rolodex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
