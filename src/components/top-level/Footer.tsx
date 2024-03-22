import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto mt-10">
        <p className="py-2 text-white sm:py-0 text-sm">
          <b className="uppercase">Disclaimer:</b> This website is a clone
          developed solely for educational purposes. It is not intended for
          commercial use or to compete with the
          <a
            href="https://kaiandkaro.com"
            target="_blank"
            className="text-violet-400 hover:underline"
          >
            &nbsp;original site (kaiandkaro.com)
          </a>
          . All content and trademarks referenced here belong to their
          respective owners. This project is designed to showcase development
          skills and to promote learning and understanding of web development
          practices.
        </p>
      </div>
      <footer className="bg-gray-800 mt-10">
        <div className="py-6 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center px-3">
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-gray-200"
            >
              JMK Motors
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
