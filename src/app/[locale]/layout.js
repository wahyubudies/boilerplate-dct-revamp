import { Footer, Header } from "./_components";

export default function RootLayout({
  children
}) {
  return <>
    <Header />
      {children}
    <Footer />
  </>;
}