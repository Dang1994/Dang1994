'use client';

import {
  Github,
  Linkedin,
  Twitter,
  GraduationCap,
  BookOpen,
  CircleUserRound,
  BookMarked,
} from 'lucide-react';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 max-w-6xl mx-auto">
      {/* Left Side: Profile and Contact Info */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
        <img
          src="/photo.jpg"
          className="rounded-full w-40 h-40 border-4 border-gray-300 shadow-md"
        />
        <h1 className="text-3xl font-bold text-center md:text-left">
          Subrat Kumar Dang
        </h1>
        <p className="text-lg text-gray-600 text-center md:text-left">
          AI Engineer | Researcher | ML & XAI Enthusiast
        </p>
        <div className="flex space-x-4 mt-2 text-gray-600">
          <a
            href="https://linkedin.com/in/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 hover:text-black" />
          </a>
          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 hover:text-sky-500" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <BookOpen className="w-6 h-6 hover:text-amber-600" />
          </a>
          <a
            href="https://orcid.org/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID"
          >
            <CircleUserRound className="w-6 h-6 hover:text-green-600" />
          </a>
        </div>
      </div>

      {/* Right Side: About Section */}
      <div className="md:w-1/2 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-blue-500" /> About
        </h2>
        <p>
          <strong>Subrat Kumar Dang</strong> is an AI Engineer focused on designing
          next-generation data-driven systems. He has <strong>2.5 years of experience</strong> at{" "}
          <a
            href="https://www.biba.uni-bremen.de/en/"
            className="text-blue-600 underline"
            target="_blank"
          >
            BIBA – Bremen Institute for Production and Logistics
          </a>{" "}
          at the{" "}
          <a
            href="https://www.uni-bremen.de/en"
            className="text-blue-600 underline"
            target="_blank"
          >
            University of Bremen
          </a>, hosted by{" "}
          <a
            href="https://www.biba.uni-bremen.de/en/people/thoben"
            className="text-blue-600 underline"
            target="_blank"
          >
            Prof. Klaus-Dieter Thoben
          </a>{" "}
          and{" "}
          <a
            href="https://www.biba.uni-bremen.de/en/people/friday"
            className="text-blue-600 underline"
            target="_blank"
          >
            Prof. Michael Freitag
          </a>. He worked in the{" "}
          <a
            href="https://www.biba.uni-bremen.de/en/research/departments/ikap"
            className="text-blue-600 underline"
            target="_blank"
          >
            IKAP – ICT Applications in Production
          </a>{" "}
          department under{" "}
          <a
            href="https://www.linkedin.com/in/karl-hribernik-24635813/"
            className="text-blue-600 underline"
            target="_blank"
          >
            Dipl.-Inform. Karl Hribernik
          </a>.
        </p>
        <p>
          At BIBA, he worked on three EU-funded projects supported by{" "}
          <a
            href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en"
            className="text-blue-600 underline"
            target="_blank"
          >
            Horizon Europe
          </a>,{" "}
          <a href="https://eitmanufacturing.eu/" className="text-blue-600 underline" target="_blank">
            EIT Manufacturing
          </a>, and{" "}
          <a href="https://www.bmbf.de/" className="text-blue-600 underline" target="_blank">
            BMBF (German Federal Ministry of Education and Research)
          </a>.
        </p>
        <p>
          He holds a Master’s in Mechanical Engineering from{" "}
          <a href="http://sliet.ac.in/" className="text-blue-600 underline" target="_blank">
            Sant Longowal Institute of Engineering & Technology (SLIET)
          </a>, India, where his thesis focused on data-driven manufacturing applications.
        </p>
      </div>
    </section>
  );
}
