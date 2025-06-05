import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Subrat Kumar Dang Portfolio",
  description: "Researcher & AI Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-900 text-white text-center py-4">
          © {new Date().getFullYear()} Subrat Kumar Dang
        </footer>
      </body>
    </html>
  );
}
