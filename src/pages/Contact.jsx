import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // Load environment variables correctly
  const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!YOUR_SERVICE_ID || !YOUR_TEMPLATE_ID || !YOUR_PUBLIC_KEY) {
      setErrorMessage("EmailJS environment variables are missing!");
      return;
    }

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(
        () => {
          setSuccessMessage("Your message has been sent!");
          setErrorMessage("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrorMessage(error.text || "Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900 min-h-screen text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Icon */}
        <div className="mb-8 text-4xl">✉️</div>

        {/* Contact Form Header */}
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-8">I'd love to hear from you. Drop me a message!</p>

        {/* Success & Error Messages */}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mt-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 mt-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

