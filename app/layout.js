import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact Manager",
  description: "Your Modern Rolodex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="container-fluid">
          <div className="row justify-content-center">
            <ul className="col-3 list-unstyled text-center">
              <li className="mb-4 mt-4">
                <h2>All Contacts</h2>
              </li>
              <li>
                <Link href="/contacts/new" className="btn btn-primary">
                  ADD CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
