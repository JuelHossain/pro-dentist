import { IconAerialLift, IconBlockquote, IconHome, IconPlus } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { useModalContext } from "../../../context/modalContext";
import auth from "../../../firebase";

const useLinks = () => {
  const { addServiceModal } = useModalContext();
  const [, { open }] = addServiceModal;

  const links = [
    { name: "home", link: "/", Icon: IconHome },
    { name: "services", link: "services", Icon: IconBlockquote },
    { name: "blog", link: "blog", Icon: IconAerialLift },
  ];

  const privateLinks = [
    {
      name: "Add Service",
      link: open,
      Icon: IconPlus,
    },
  ];
  const [user] = useAuthState(auth);
  return user ? [...links, ...privateLinks] : links;
};

export default useLinks;
