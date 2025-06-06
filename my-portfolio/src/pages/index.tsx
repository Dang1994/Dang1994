import Link from "next/link";

export default function Home() {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Profile and Socials */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
          <img
            src="/photo.jpg"
            alt="Subrat Kumar Dang"
            className="rounded-full w-40 h-40 border-4 border-gray-300 shadow-md"
          />
          <h1 className="text-3xl font-bold text-center md:text-left">Subrat Kumar Dang</h1>
          <p className="text-lg text-gray-600 text-center md:text-left">
            AI Engineer | Researcher | ML & XAI Enthusiast
          </p>

          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110" />
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110" />
            </a>
            <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110" />
            </a>
            <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
              <img src="/icons/google-scholar.svg" alt="Google Scholar" className="w-6 h-6 hover:scale-110" />
            </a>
            <a href="https://orcid.org/YOUR_ID" target="_blank" rel="noopener noreferrer">
              <img src="/icons/orcid.svg" alt="ORCID" className="w-6 h-6 hover:scale-110" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-wrap gap-4 pt-4 text-blue-600 underline font-medium">
            <Link href="/">About</Link>
            <Link href="/education">Education</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Right: About Section */}
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="mb-4">
            <strong>Subrat Kumar Dang</strong> is an AI Engineer working on designing next-generation
            data-driven systems. He has <strong>2.5 years of experience</strong> at{" "}
            <a href="https://www.biba.uni-bremen.de/en/" className="text-blue-600 underline" target="_blank">
              BIBA – Bremen Institute for Production and Logistics
            </a>{" "}
            at the{" "}
            <a href="https://www.uni-bremen.de/en" className="text-blue-600 underline" target="_blank">
              University of Bremen
            </a>, hosted by{" "}
            <a href="https://www.biba.uni-bremen.de/en/people/thoben" className="text-blue-600 underline" target="_blank">
              Prof. Klaus-Dieter Thoben
            </a>{" "}
            and{" "}
            <a href="https://www.biba.uni-bremen.de/en/people/friday" className="text-blue-600 underline" target="_blank">
              Prof. Michael Freitag
            </a>.
          </p>
          <p className="mb-4">
            At BIBA, he contributed to three data science projects funded by{" "}
            <a href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en" className="text-blue-600 underline" target="_blank">
              Horizon Europe
            </a>,{" "}
            <a href="https://eitmanufacturing.eu/" className="text-blue-600 underline" target="_blank">
              EIT Manufacturing
            </a>, and{" "}
            <a href="https://www.bmbf.de/" className="text-blue-600 underline" target="_blank">
              BMBF (Federal Ministry of Education and Research, Germany)
            </a>.
          </p>
          <p>
            Subrat earned his master’s in Mechanical Engineering from{" "}
            <a href="http://sliet.ac.in/" className="text-blue-600 underline" target="_blank">
              Sant Longowal Institute of Engineering & Technology (SLIET)
            </a>, India, with a thesis focused on data-driven manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}
