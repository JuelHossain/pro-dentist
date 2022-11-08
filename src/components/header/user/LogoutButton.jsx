import { ActionIcon } from "@mantine/core";

import { IconLogout } from "@tabler/icons";
import { signOut } from "firebase/auth";
import auth from "../../../firebase";

export default function LogoutButton() {
  return (
    <ActionIcon
      className="w-8 h-8"
      variant="filled"
      onClick={() => {
        signOut(auth);
      }}
    >
      <IconLogout size={20} />
    </ActionIcon>
  );
}
