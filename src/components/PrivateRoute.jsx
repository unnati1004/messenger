import React, { useContext } from "react";
import { Route,Navigate} from 'react-router-dom';
import  {Auth}  from "./context/auth";
const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useContext(Auth);
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
