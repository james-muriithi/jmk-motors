import { Link, useLocation } from "react-router-dom";
import { Navbar, CustomFlowbiteTheme } from "flowbite-react";
import "./Navbar.scss";

// Extend the default Flowbite theme
const customTheme: CustomFlowbiteTheme["navbar"] = {
  link: {
    base: "transition duration-300 ease-in-out text-base",
    active: {
      on: "text-white font-bold",
      off: "text-gray-400",
    },
  },
};

export default function Nav() {
  const location = useLocation();

  const { pathname } = location;
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our cars",
      href: "/vehicles",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];
  return (
    <Navbar
      fluid
      rounded
      theme={customTheme}
      className="bg-dark shadow-lg py-4"
    >
      <Navbar.Brand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          JMK Motors
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="text-gray-300 hover:bg-transparent focus:ring-0" />
      <Navbar.Collapse>
        {navLinks.map((link) => (
          <Navbar.Link
            as={Link}
            key={link.name}
            to={link.href}
            active={link.href === pathname}
          >
            <span>{link.name}</span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
