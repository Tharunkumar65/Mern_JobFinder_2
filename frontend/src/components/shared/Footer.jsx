

const Footer = () => {
  return (
   <footer className="border-t border-t-gray-200 py-8">
    <div className='flex flex-col items-center mt-5'>
        <ul className='flex justify-center lg:gap-6'>
            <li className="item mr-2">
                <a href="https://www.instagram.com/" className='icon-gradient'>
                    <i className="fa-brands fa-instagram text-2xl p-2 text-gray-600 icon hover:text-white"></i>
                </a>
            </li>
            <li className="item mr-2">
                <a href="https://in.linkedin.com/">
                    <i className="fa-brands fa-linkedin text-gray-600 text-2xl p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-300 icon"></i>
                </a>
            </li>
            <li className="item mr-2">
    <a href="https://github.com/">
        <i className="fa-brands fa-github text-gray-600 text-2xl p-2 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-colors duration-300 icon"></i>
    </a>
</li>
            <li className="item mr-2">
                <a href="https://twitter.com/">
                    <i className="fa-brands fa-x-twitter text-gray-600 text-2xl p-2 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-colors duration-300 icon"></i>
                </a>
            </li>
        </ul>
        <p className='mt-5'>&copy; 2024 JobFinder. All rights reserved.</p>
    </div>
</footer>

  );
}

export default Footer;