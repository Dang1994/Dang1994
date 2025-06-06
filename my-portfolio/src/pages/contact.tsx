export default function Contact() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>You can reach me at:</p>
      <ul className="mt-2 space-y-2">
        <li>Email: <a href="mailto:your.email@example.com" className="text-blue-600 underline">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/YOUR_LINK" className="text-blue-600 underline" target="_blank">linkedin.com/in/YOUR_LINK</a></li>
        <li>GitHub: <a href="https://github.com/YOUR_USERNAME" className="text-blue-600 underline" target="_blank">github.com/YOUR_USERNAME</a></li>
      </ul>
    </section>
  );
}
