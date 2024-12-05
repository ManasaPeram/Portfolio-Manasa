import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Manasa | Full Stack Developer",
  description:
  "Welcome to Manasa's Full Stack Development Portfolio, where ideas turn into powerful web solutions with ReactJS, NextJS, and NestJS!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
