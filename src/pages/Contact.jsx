import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    })
    .then(
      () => {
        setSuccessMessage('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
       setErrorMessage(error)
      },
    );


  };

  return (
    <section id="contact" className="bg-gray-900 h-screen text-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Contact Image */}
        <div className="mb-8">
          <span className='text-4xl'>✉️</span>
        </div>

        {/* Contact Form */}
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-8">I'd love to hear from you. Drop me a message!</p>

        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <form  ref={form}  onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-md p-3 mt-2 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-md p-3 mt-2 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-md p-3 mt-2 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-md py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
