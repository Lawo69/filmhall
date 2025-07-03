import React from 'react'
import ContactForm from '../../components/forms/ContactForm'

const ContactSection = () => {
  return (
    <div
      className='container mx-auto flex flex-col gap-4 py-14 px-6 md:px-8 lg:px-10'
      data-aos="fade-up"
    >
      <div className='flex flex-col gap-2' data-aos="fade-right">
        <h1 className='font-dinAlternate text-3xl font-medium'>How to reach us</h1>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur.</p>
      </div>

      <div className='flex flex-col gap-10 lg:flex-row'>
        <div data-aos="fade-up" data-aos-delay="100">
          <ContactForm />
        </div>

        <div
          className='w-full h-96 md:h-auto rounded overflow-hidden'
          data-aos="zoom-in" data-aos-delay="200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.125538271057!2d79.86398595!3d6.877038000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259660f012a4d%3A0x956693fe11c189de!2s370%20High%20Level%20Rd%2C%20Colombo%2000600%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1720193933062!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="eBEYONDS Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
