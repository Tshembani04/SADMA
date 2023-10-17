"use client";
import { Inter } from "next/font/google";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { metadata } from "./layout/metadata";
import "./globals.css";

//Set an authentication state observer and get user data using onAuthStateChange

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Logged in userID:", uid);
        router.push("/home");
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
