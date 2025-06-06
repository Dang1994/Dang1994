import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Subrat Kumar Dang</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/publications" className="hover:underline">
            Publications
          </Link>
          <Link href="/resume" className="hover:underline">
            Resume
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Subrat Kumar Dang. All rights reserved.
      </footer>
    </div>
  );
}
