import "./globals.css";
import Navbar from "./components/Navbar"; 

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* এখানে inter.className বাদ দিয়ে সাধারণ Tailwind ক্লাস বা font-sans দেওয়া হয়েছে */}
      <body className="bg-[#1a1f26] min-h-screen font-sans">
        <Navbar /> 
        <main>{children}</main>
      </body>
    </html>
  );
}