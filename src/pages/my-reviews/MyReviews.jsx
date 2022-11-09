import PrivateRoute from "../../components/auth/PrivateRoute";

export default function MyReviews() {
  return (
    <PrivateRoute>
      <div>this is MyReviews</div>
    </PrivateRoute>
  );
}
