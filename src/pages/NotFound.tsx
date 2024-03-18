import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center h-[83vh] flex items-center justify-center">
      <div>
        <h1 className="text-3xl mb-3">Oops! You seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <div className="flex gap-x-3 justify-center mt-5 text-violet-400">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/vehicles" className="hover:underline">
            All vehicles
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
