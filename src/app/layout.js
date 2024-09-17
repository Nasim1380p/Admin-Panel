// import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Admin-Panel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden '>
        <main className="w-full mx-auto 2xl:container bg-no-repeat bg-back bg-cover">
          {children}
        </main>
      </body>
    </html>
  );
}