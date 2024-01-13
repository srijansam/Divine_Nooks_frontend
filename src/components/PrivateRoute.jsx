import { useSelector } from "react-redux";
import { Outlet, Navaigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navaigate to="/sign-in" />;
}
