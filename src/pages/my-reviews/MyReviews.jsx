import PrivateRoute from "../../components/auth/PrivateRoute";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";

export default function MyReviews() {
  useSetPageTitle("My Reviews");

  return (
    <PrivateRoute>
      <div>this is MyReviews</div>
    </PrivateRoute>
  );
}
