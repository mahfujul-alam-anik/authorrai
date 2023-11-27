import "../globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import Sidebar from "@/components/user/Sidebar";
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";

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
        <div className="relative">
          <Provider>
            <div className="flex transition-all duration-500 relative">
              <Sidebar />
              <div className="flex flex-col w-full bg-slate-800 relative">
                <Header />
                <main className="p-12 max-md:p-7 max-sm:p-3 ">
                  {children}
                  {/* <Footer /> */}
                </main>
              </div>
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
