import { Button, Group, LoadingOverlay } from "@mantine/core";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext/authContext";
import { useHeaderContext } from "../../../context/headerContext";
import auth from "../../../firebase";
import LogoutButton from "./LogoutButton";
import UserButton from "./UserButton";

export default function LoginLogout() {
  const [user, userLoading] = useAuthState(auth);
  const { loading } = useAuthContext();
  const { disclosure } = useHeaderContext();
  const [, { close }] = disclosure;
  return (
    <Group className="relative gap-2">
      <LoadingOverlay loaderProps={{ size: "sm" }} visible={loading || userLoading} />
      {user ? (
        <>
          <UserButton />
          <LogoutButton />
        </>
      ) : (
        <Button onClick={close} className="h-8" component={Link} to="/login">
          Log in
        </Button>
      )}
    </Group>
  );
}
