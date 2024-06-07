import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer mt-10 bg-blue-950 p-4 flex items-center justify-between">
      <p className="text-sm">&copy; 2024 - All rights reserved</p>
      <div className="flex space-x-4">
        <a href="https://github.com/andaridea" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/dea-puspita-dwi-andari-a86621151/" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
