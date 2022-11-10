import { Group, Header } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import Logo from "./Logo";
import MobileLinks from "./mobile/MobileLinks";
import NavLinks from "./nav/NavLinks";
import UserSection from "./user/UserSection";

export default function AppHeader() {
  const [{ y }] = useWindowScroll();
  const m = y > 100;
  return (
    <Header position="sticky" className=" sticky top-0 py-4 z-40 ">
      <Group className={`justify-between ${m || "items-end"} duration-500 `} noWrap>
        <Logo m={m} />
        <NavLinks />
        <UserSection />
        <MobileLinks />
      </Group>
    </Header>
  );
}
