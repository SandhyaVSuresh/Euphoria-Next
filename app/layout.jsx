import './globals.css';
import Navbar from "@/components/include/Navbar"
import Footer from "@/components/include/Footer"

export const metadata = {
  title: 'project',
  description: 'A Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
