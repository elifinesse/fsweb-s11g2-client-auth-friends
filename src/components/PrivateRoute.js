import { Route, Redirect } from "react-router-dom";
import { lsKey } from "./LoginForm";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem(lsKey) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
