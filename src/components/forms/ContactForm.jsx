import React from 'react';
import useContactForm from '../../hooks/useContactForm';

const ContactForm = () => {
  const { loading, handleSubmit } = useContactForm();

  return (
    <form className="lg:min-w-md space-y-4 text-white" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 text-gray-400">First Name *</label>
          <input
            type="text"
            name="first_name"
            className="w-full bg-gray p-2 rounded-md focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-400">Last Name *</label>
          <input
            type="text"
            name="last_name"
            className="w-full bg-gray p-2 rounded-md focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-400">Email *</label>
        <input
          type="email"
          name="email"
          className="w-full bg-gray p-2 rounded-md focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-400">Telephone</label>
        <input
          type="tel"
          name="phone"
          className="w-full bg-gray p-2 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-400">Message</label>
        <textarea
          rows="4"
          name="message"
          className="w-full bg-gray p-2 rounded-md focus:outline-none"
          required
        ></textarea>
      </div>

      <p className="text-xs text-gray-300 italic">*required fields</p>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="terms"
          required
          className="mt-1 bg-black-secondary"
        />
        <label className="text-sm text-gray-400">
          I agree to the <a href="#" className="underline font-medium text-white">Terms & Conditions</a>
        </label>
      </div>

      <div className='w-full flex justify-end'>
        <button
          type="submit"
          disabled={loading}
          className={`bg-orange text-white py-2 px-8 rounded hover:bg-yellow-600 transition cursor-pointer ${loading ? 'opacity-60 pointer-events-none' : ''}`}
        >
          {loading ? 'Submitting...' : 'SUBMIT'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
