import { Group, Header } from "@mantine/core";

import Logo from "./Logo";
import MobileLinks from "./mobile/MobileLinks";
import NavLinks from "./nav/NavLinks";
import UserSection from "./user/UserSection";

export default function AppHeader() {
  return (
    <Header position="sticky" className=" sticky top-0 py-4 z-40">
      <Group className="justify-between items-end" noWrap>
        <Logo />
        <NavLinks />
        <UserSection />
        <MobileLinks />
      </Group>
    </Header>
  );
}
