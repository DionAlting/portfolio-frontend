import { Redirect, Route, RouteProps } from "react-router";

export type AuthRouteProps = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  authenticationPath: string;
} & RouteProps;

const AdminRoute = ({
  isAuthenticated,
  isAdmin,
  authenticationPath,
  ...routeProps
}: AuthRouteProps) => {
  if (isAuthenticated && isAdmin) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default AdminRoute;
