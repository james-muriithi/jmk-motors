import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-20">
      <div className="py-6 large-container">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-200"
          >
            JMK Motors
          </Link>
          <p className="py-2 text-white sm:py-0">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
