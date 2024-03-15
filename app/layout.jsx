import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloudnet AI -The Evolution of Cloud Computing",
  description:
    "Cloudnet AI plays a crucial role in bridging traditional cloud computing with the Web3 era's unique demands, employing AI and machine learning to enhance efficiency and security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/cloud.ico" />
      </head>
      <body className={cn(inter.className, "bg-slate-50 dark:bg-slate-950")}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
