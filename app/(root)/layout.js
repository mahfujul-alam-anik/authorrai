import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "AI Book Generator and Audio Book Generator| Create Your Own Masterpieces",
  description:
    "Welcome to the AI Book Wizard, where creativity meets technology! Unlock the power of artificial intelligence to effortlessly generate personalized books and stories. Craft unique tales, unleash your imagination, and bring your literary dreams to life with just a few clicks. Start writing your story today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative transition-all duration-500">
          <Provider>
            <Header />
            {children}
            <Footer />
            <MobileNavbar />
          </Provider>
        </div>
      </body>
    </html>
  );
}
