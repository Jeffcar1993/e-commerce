import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  canActivate: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({ canActivate, redirectPath = "/login" }: ProtectedRouteProps) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
