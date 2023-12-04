import { Navbar } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
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

const navLinks = [
  {
    name: "Home",
    href: "#",
    active: true,
  },
  {
    name: "Our cars",
    href: "#",
    active: false,
  },
  {
    name: "About",
    href: "#",
    active: false,
  },
  {
    name: "Contact",
    href: "#",
    active: false,
  },
];

export default function Nav() {
  return (
    <Navbar fluid rounded theme={customTheme} className="bg-dark shadow-lg py-4">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          JMK Motors
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="text-gray-300 hover:bg-transparent focus:ring-0" />
      <Navbar.Collapse>
        {navLinks.map((link) => (
          <Navbar.Link key={link.name} href={link.href} active={link.active}>
            <span>{link.name}</span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
