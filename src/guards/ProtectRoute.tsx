import { Navigate, Outlet } from "react-router-dom";
// import { IUser } from "../shared/interfaces/user.interface";

interface ProtectRouteProps {
  // user: IUser | null;
  IsAllowed: boolean;
  children: React.ReactNode;
  redirectPath?: string;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ IsAllowed, redirectPath = "/", children }) => {
  if (!IsAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectRoute;
