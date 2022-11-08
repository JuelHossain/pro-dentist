import AuthModal from "../auth/AuthModal";
import PrivacyModal from "../privacy-policy/PrivacyModal";
import TermsModal from "../terms&conditions/TermsModal";

export default function AllModal() {
  return (
    <>
      <TermsModal />
      <PrivacyModal />
      <AuthModal />
    </>
  );
}
