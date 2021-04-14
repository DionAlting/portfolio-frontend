import { Redirect, Route, RouteProps } from "react-router";

export type AuthRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

const AuthRoute = ({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: AuthRouteProps) => {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default AuthRoute;
