export default function CV() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
      <p>
        Download my CV here:
        <a
          href="/Subrat_CV.pdf"
          download
          className="text-blue-600 underline ml-2"
        >
          Subrat_CV.pdf
        </a>
      </p>
    </section>
  );
}
