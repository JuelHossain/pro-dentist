import { Group } from "@mantine/core";

import links from "./links";
import NavLink from "./NavLink";

export default function NavLinks() {
  const navlinks = links.map((nav) => <NavLink key={nav.link} nav={nav} />);

  return <Group className="hidden md:flex gap-2">{navlinks}</Group>;
}
