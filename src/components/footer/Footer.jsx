import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black-secondary w-full' data-aos="fade-up">
      <div className='container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 py-10 px-6 md:px-8 lg:px-10'>
        <p className="font-openSans text-center md:text-start text-white">
          <span className="font-semibold">IT Group</span><br />
          C. Salvador de Madariaga, 1 <br />
          28027 Madrid<br />
          Spain
        </p>

        <div className='flex flex-row md:flex-col items-center justify-center md:items-end gap-4 text-white'>
          <span>Follow us on</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-orange transition">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-5 px-6 md:px-8 lg:px-10 border-t border-gray-600 text-gray-400 text-sm'>
        <p className="text-center lg:text-left">
          © 2022 IT Hotels. All rights reserved.
        </p>
        <p className="text-center lg:text-right">
          Photos by Felix Mooneeram & Serge Kutuzov on Unsplash
        </p>
      </div>
    </footer>
  );
};

export default Footer;
