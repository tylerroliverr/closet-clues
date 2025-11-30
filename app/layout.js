import Navbar from "./components/navbar";
import "./globals.css";
import { SizeProvider } from "./SizeContext";

export const metadata = {
  title: "Closet Clues",
  description: "Paris duo that focuses on styling & creative direction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SizeProvider>
          <Navbar />
          <div className="spacer"></div>
          {children}
        </SizeProvider>
      </body>
    </html>
  );
}
