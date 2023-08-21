import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Abu Raihan - Full Stack Web Developer | Javascript, Nextjs, Reactjs, Go, Nodejs, Ruby on Rails",
  description:
    "Explore Abu Raihan impressive portfolio showcasing a range of web development projects. From food ordering platforms to dream getaways, discover diverse creations built with technologies like React, Redux, Go, Ruby on Rails, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full max-w-[1920px] mx-auto">
          <Header />
          <main className="mt-20 bg-gradient-to-bl from-sky-950 via-gray-950 to-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
