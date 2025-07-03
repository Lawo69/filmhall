import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black-secondary w-full'>
        <div className='container mx-auto flex flex-col items-center justify-between md:items-start w-full md:flex-row gap-4 py-10 px-6 md:px-8 lg:px-10 pb'>
          <p className="font-openSans text-center md:text-start"> <span className="font-semibold">IT Group</span><br />
            C. Salvador de Madariaga, 1 <br />
            28027 Madrid<br />
            Spain</p>

          <div className='container mx-auto w-full flex flex-row justify-center items-center lg:justify-end lg:flex-col gap-4 py-4 px-6 md:px-8 lg:px-10'>
            Follow us on
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className='container mx-auto flex flex-col justify-between items-center lg:items-start w-full lg:flex-row gap-4 py-5 px-6 md:px-8 lg:px-10 pb border-t border-gray-600'>
          <p className="font-openSans"> <span>Copyright © 2022 IT Hote ls. All rights reserved.</span></p>
          <p className="font-openSans">Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
        </div>
    </footer>
  )
}

export default Footer