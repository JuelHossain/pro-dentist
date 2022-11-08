/* eslint-disable react/display-name */
import { Button } from "@mantine/core";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = forwardRef(({ nav, ...props }, ref) => {
  const { link, name } = nav;
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  return (
    <Button
      {...props}
      ref={ref}
      component={Link}
      variant={(path.includes(link) && link !== "/") || (pathname === "/" && link === "/") ? "light" : "subtle"}
      className="capitalize"
      to={link}
    >
      {name}
    </Button>
  );
});

export default NavLink;
