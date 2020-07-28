import { MenuItem } from ".";
import logo from "../../images/logo.svg";

export const menuItems: MenuItem[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    image: logo,
    children: [
      { path: "/abcdef/:12345", name: "404" },
      { path: "/", name: "Home", image: logo },
      { path: "/about", name: "About" },
      { path: "/media", name: "Media" },
      { path: "/secret", name: "Secret" },
      { path: "/login", name: "Login" },
      { path: "/signup", name: "Signup" },
    ],
  },
  { path: "/about", name: "About" },
  { path: "/media", name: "Media" },
  { path: "/secret", name: "Secret" },
  { path: "/login", name: "Login" },
  { path: "/signup", name: "Signup" },
];
